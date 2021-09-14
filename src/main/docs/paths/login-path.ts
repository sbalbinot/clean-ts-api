export const loginPath = {
  post: {
    tags: ['Login'],
    summary: 'Authentication API',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loginParamsSchema'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Ok.',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/accountSchema'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      401: {
        $ref: '#/components/unauthorized'
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
