import { loginPath, signUpPath, surveyPath, surveyResultPath } from './paths'
import { apiKeyAuthSchema, accountSchema, loginParamsSchema, signUpParamsSchema, surveySchema, surveysSchema, surveyAnswerSchema, addSurveyParamsSchema, surveyResultSchema, saveSurveyResultParamsSchema, errorSchema } from './schemas'
import { badRequest, unauthorized, forbidden, notFound, serverError } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API do curso do Mango para realizar enquetes entre programadores',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Survey'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath,
    '/surveys/{surveyId}/results': surveyResultPath
  },
  schemas: {
    accountSchema,
    loginParamsSchema,
    signUpParamsSchema,
    surveySchema,
    surveysSchema,
    surveyAnswerSchema,
    addSurveyParamsSchema,
    surveyResultSchema,
    saveSurveyResultParamsSchema,
    errorSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    serverError
  }
}
