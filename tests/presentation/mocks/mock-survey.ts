import { SurveyModel } from '@/domain/models'
import { AddSurvey, CheckSurveyById, LoadAnswersBySurvey, LoadSurveys } from '@/domain/usecases'
import { mockSurveyModels } from '@/tests/domain/mocks'
import faker from 'faker'

export class AddSurveySpy implements AddSurvey {
  addSurveyParams: AddSurvey.Params

  async add (data: AddSurvey.Params): Promise<void> {
    this.addSurveyParams = data
    return await Promise.resolve()
  }
}

export class CheckSurveyByIdSpy implements CheckSurveyById {
  id: string
  result = true

  async checkById (id: string): Promise<CheckSurveyById.Result> {
    this.id = id
    return this.result
  }
}

export class LoadAnswersBySurveySpy implements LoadAnswersBySurvey {
  id: string
  result = [faker.random.word(), faker.random.word()]

  async loadAnswers (id: string): Promise<LoadAnswersBySurvey.Result> {
    this.id = id
    return this.result
  }
}

export class LoadSurveysSpy implements LoadSurveys {
  surveyModels = mockSurveyModels()
  accountId: string

  async load (accountId: string): Promise<SurveyModel[]> {
    this.accountId = accountId
    return await Promise.resolve(this.surveyModels)
  }
}
