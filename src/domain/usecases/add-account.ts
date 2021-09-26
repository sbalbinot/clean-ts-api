import { AccountModel } from '@/domain/models'

export interface AddAccount {
  add: (addAccountParams: AddAccount.Params) => Promise<AddAccount.Result>
}

export namespace AddAccount {
  export type Params = Omit<AccountModel, 'id'>

  export type Result = boolean
}
