import { accountSchema, loginParamsSchema, signUpParamsSchema, surveySchema, surveysSchema, surveyAnswerSchema, addSurveyParamsSchema, surveyResultSchema, surveyResultAnswerSchema, saveSurveyResultParamsSchema, errorSchema } from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  survey: surveySchema,
  surveys: surveysSchema,
  surveyAnswer: surveyAnswerSchema,
  addSurveyParams: addSurveyParamsSchema,
  surveyResult: surveyResultSchema,
  surveyResultAnswer: surveyResultAnswerSchema,
  saveSurveyResultParams: saveSurveyResultParamsSchema,
  error: errorSchema
}
