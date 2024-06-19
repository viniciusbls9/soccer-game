import fetchClient from './fetchClient'

global.fetch = jest.fn()

describe('fetchClient', () => {
  beforeEach(() => (fetch as jest.Mock).mockClear())
  const mockFetch = fetch as jest.Mock

  it('should fetch GET data successfully', async () => {
    const mockData = { key: 'value' }

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    })

    const result = await fetchClient.get<typeof mockData>('http://example.com')
    expect(result).toEqual(mockData)
    expect(fetch).toHaveBeenCalledWith('http://example.com', { method: 'GET' })
  })

  it('should throw an error if the network response is not ok', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
    })

    await expect(fetchClient.get('http://example.com')).rejects.toThrow(
      'Network response was not ok',
    )
    expect(fetch).toHaveBeenCalledWith('http://example.com', { method: 'GET' })
  })
})
