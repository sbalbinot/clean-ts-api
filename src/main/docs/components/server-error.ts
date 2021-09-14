export const serverError = {
  description: 'Unexpected error.',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/errorSchema'
      }
    }
  }
}
