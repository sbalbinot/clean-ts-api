import { accountSchema, loginParamsSchema, signUpParamsSchema, surveySchema, surveysSchema, surveyAnswerSchema, addSurveyParamsSchema, surveyResultSchema, saveSurveyResultParamsSchema, errorSchema } from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  survey: surveySchema,
  surveys: surveysSchema,
  surveyAnswer: surveyAnswerSchema,
  addSurveyParams: addSurveyParamsSchema,
  surveyResult: surveyResultSchema,
  saveSurveyResultParams: saveSurveyResultParamsSchema,
  error: errorSchema
}
