import { AddSurvey } from '@/domain/usecases'
import { AddSurveyRepository } from '@/data/protocols'

export class DbAddSurvey implements AddSurvey {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) {}

  async add (addSurveyParams: AddSurvey.Params): Promise<void> {
    await this.addSurveyRepository.add(addSurveyParams)
  }
}
