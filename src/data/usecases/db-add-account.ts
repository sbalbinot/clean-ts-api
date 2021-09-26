import { AddAccount } from '@/domain/usecases'
import { Hasher, AddAccountRepository, CheckAccountByEmailRepository } from '@/data/protocols'

export class DbAddAccount implements AddAccount {
  constructor (private readonly hasher: Hasher, private readonly addAccountRepository: AddAccountRepository, private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository) {}

  async add (addAccountParams: AddAccount.Params): Promise<AddAccount.Result> {
    const exists = await this.checkAccountByEmailRepository.checkByEmail(addAccountParams.email)
    let isValid = false
    if (!exists) {
      const hashedPassword = await this.hasher.hash(addAccountParams.password)
      isValid = await this.addAccountRepository.add({ ...addAccountParams, password: hashedPassword })
    }
    return isValid
  }
}
