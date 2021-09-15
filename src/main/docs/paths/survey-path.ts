export const surveyPath = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Survey'],
    summary: 'Returns a list of surveys.',
    responses: {
      200: {
        description: 'A JSON array of surveys.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/surveysSchema'
            }
          }
        }
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
