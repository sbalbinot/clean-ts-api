import { AccountModel } from '@/domain/models'

// Omit creates the same class but without the fields that are passed through param
// In this case AddAccountParams is equal to AccountModel without property 'id'
export type AddAccountParams = Omit<AccountModel, 'id'>

export interface AddAccount {
  add: (addAccountParams: AddAccountParams) => Promise<AccountModel>
}
