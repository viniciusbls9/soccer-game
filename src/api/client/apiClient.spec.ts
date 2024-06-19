import { createApiClient } from './apiClient'
import { HttpClient } from '../types'

describe('createApiClient', () => {
  it('should create an API client with the provided HttpClient methods', () => {
    const mockGet = jest.fn()
    const mockClient: HttpClient = {
      get: mockGet,
    }

    const apiClient = createApiClient(mockClient)

    expect(apiClient).toHaveProperty('get')
    expect(apiClient.get).toBe(mockGet)
  })

  it('should call the get method of the provided HttpClient', async () => {
    const mockGet = jest.fn().mockResolvedValue('mock data')
    const mockClient: HttpClient = {
      get: mockGet,
    }

    const apiClient = createApiClient(mockClient)

    const result = await apiClient.get('http://example.com')

    expect(mockGet).toHaveBeenCalledWith('http://example.com')
    expect(result).toBe('mock data')
  })
})
