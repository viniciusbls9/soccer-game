import { getPlayer } from './getPlayer'

const mockResponseWithoutFilter = [
  { name: 'Player1', id: 1 },
  { name: 'Player2', id: 2 },
]

jest.mock('../../client/apiClient', () => ({
  createApiClient: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve(mockResponseWithoutFilter)),
  })),
}))

describe('getPlayer function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return filtered player information when API call succeeds', async () => {
    const playerName = 'Player1'
    const expectedFilteredResponse = [{ name: 'Player1', id: 1 }]

    const result = await getPlayer(playerName)

    expect(result).toEqual(expectedFilteredResponse)
  })

  it('should return empty response array when player name doesnt exist', async () => {
    const playerName = 'Player12'

    const result = await getPlayer(playerName)

    expect(result).toEqual([])
  })
})
