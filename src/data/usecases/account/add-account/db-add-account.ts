import { AccountModel, AddAccount, AddAccountParams, AddAccountRepository, LoadAccountByEmailRepository, Hasher } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (private readonly hasher: Hasher, private readonly addAccountRepository: AddAccountRepository, private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository) {}

  async add (addAccountParams: AddAccountParams): Promise<AccountModel> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(addAccountParams.email)
    if (!account) {
      const hashedPassword = await this.hasher.hash(addAccountParams.password)
      const newAccount = await this.addAccountRepository.add(Object.assign({}, addAccountParams, { password: hashedPassword }))
      return newAccount
    }
    return null
  }
}
