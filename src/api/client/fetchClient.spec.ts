import fetchClient from './fetchClient'

global.fetch = jest.fn()

describe('fetchClient', () => {
  beforeEach(() => (fetch as jest.Mock).mockClear())

  it('should fetch GET data successfully', async () => {
    const mockData = { key: 'value' }

    const mockFetch = fetch as jest.Mock

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    })

    const result = await fetchClient.get<typeof mockData>('http://example.com')
    expect(result).toEqual(mockData)
    expect(fetch).toHaveBeenCalledWith('http://example.com', { method: 'GET' })
  })

  it('should throw an error if the network response is not ok', async () => {
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    })

    await expect(fetchClient.get('http://example.com')).rejects.toThrow(
      'Network response was not ok',
    )
    expect(fetch).toHaveBeenCalledWith('http://example.com', { method: 'GET' })
  })
})
