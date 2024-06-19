import { HttpClient } from '../types'

export const createApiClient = (client: HttpClient) => ({
  get: client.get,
})
