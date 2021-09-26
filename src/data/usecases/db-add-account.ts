import { AddAccount } from '@/domain/usecases'
import { Hasher, AddAccountRepository, LoadAccountByEmailRepository } from '@/data/protocols'

export class DbAddAccount implements AddAccount {
  constructor (private readonly hasher: Hasher, private readonly addAccountRepository: AddAccountRepository, private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository) {}

  async add (addAccountParams: AddAccount.Params): Promise<AddAccount.Result> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(addAccountParams.email)
    let isValid = false
    if (!account) {
      const hashedPassword = await this.hasher.hash(addAccountParams.password)
      isValid = await this.addAccountRepository.add({ ...addAccountParams, password: hashedPassword })
    }
    return isValid
  }
}
