import { auth } from '@/main/middlewares/auth'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeSaveSurveyResultController } from '@/main/factories/controllers/survey-result/save-survey-result/save-survey-result-controller-factory'
import { Router } from 'express'

export default async (router: Router): Promise<void> => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
}
