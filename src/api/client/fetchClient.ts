import { HttpClient } from '../types'

const fetchClient: HttpClient = {
  get: async <T>(url: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(url, { ...options, method: 'GET' })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  },
}

export default fetchClient
