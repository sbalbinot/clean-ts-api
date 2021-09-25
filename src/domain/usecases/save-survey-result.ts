import { SurveyResultModel } from '@/domain/models'

// Omit creates the same class but without the fields that are passed through param
// In this case SaveSurveyResultParams is equal to SurveyResultModel without property 'id'
export type SaveSurveyResultParams = {
  surveyId: string
  accountId: string
  answer: string
  date: Date
}

export interface SaveSurveyResult {
  save: (data: SaveSurveyResultParams) => Promise<SurveyResultModel>
}
