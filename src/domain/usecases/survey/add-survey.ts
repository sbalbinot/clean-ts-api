import { SurveyModel } from '@/domain/models/survey'

// Omit creates the same class but without the fields that are passed through param
// In this case AddSurveyModel is equal to SurveyModel without property 'id'
export type AddSurveyModel = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
