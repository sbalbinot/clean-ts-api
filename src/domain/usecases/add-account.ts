import { AccountModel } from '@/domain/models/account'

// Omit creates the same class but without the fields that are passed through param
// In this case AddAccountModel is equal to AccountModel without property 'id'
export type AddAccountModel = Omit<AccountModel, 'id'>

export interface AddAccount {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
