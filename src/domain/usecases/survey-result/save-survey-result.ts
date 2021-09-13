import { SurveyResultModel } from '@/domain/models/survey-result'

// Omit creates the same class but without the fields that are passed through param
// In this case SaveSurveyResultParams is equal to SurveyResultModel without property 'id'
export type SaveSurveyResultParams = Omit<SurveyResultModel, 'id'>

export interface SaveSurveyResult {
  save: (data: SaveSurveyResultParams) => Promise<SurveyResultModel>
}
