export const unauthorized = {
  description: 'Authorization information is missing or invalid.',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
