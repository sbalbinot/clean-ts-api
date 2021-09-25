import { SurveyModel } from '@/domain/models'

// Omit creates the same class but without the fields that are passed through param
// In this case AddSurveyParams is equal to SurveyModel without property 'id'
export type AddSurveyParams = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add: (data: AddSurveyParams) => Promise<void>
}
