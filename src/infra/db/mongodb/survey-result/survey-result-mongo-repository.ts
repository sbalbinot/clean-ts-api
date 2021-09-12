import { MongoHelper } from '../helpers/mongo-helper'
import { SaveSurveyResultRepository } from '@/data/protocols/db/survey-result/save-survey-result-repository'
import { SaveSurveyResultModel } from '@/domain/usecases/survey-result/save-survey-result'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { ObjectId } from 'mongodb'

export class SurveyResultMongoRepository implements SaveSurveyResultRepository {
  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    const surveyResultColletion = await MongoHelper.getColletion('surveyResults')
    const result = await surveyResultColletion.findOneAndUpdate({
      surveyId: new ObjectId(data.surveyId),
      accountId: new ObjectId(data.accountId)
    }, {
      $set: {
        answer: data.answer,
        date: data.date
      }
    }, {
      // Se não encontrar registro com informações acima, criar um novo.
      upsert: true,
      returnDocument: 'after'
    })
    return result.value && MongoHelper.map(result.value)
  }
}
