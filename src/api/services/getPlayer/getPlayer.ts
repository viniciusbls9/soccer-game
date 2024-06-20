import { PlayerInfoCardProps } from '@/components/PlayerInfoCard/types'

import { createApiClient } from '@/api/client/apiClient'
import fetchClient from '@/api/client/fetchClient'

const apiClient = createApiClient(fetchClient)

const BASE_URL = 'http://localhost:3030/players'

export const getPlayer = async (
  name: string,
): Promise<PlayerInfoCardProps[] | undefined> => {
  try {
    const response = await apiClient.get<PlayerInfoCardProps[]>(
      `${BASE_URL}?${name}`,
    )

    const mockFilteredResponse = response.filter((player) =>
      player.name.toLowerCase().includes(name.toLowerCase()),
    )

    return mockFilteredResponse
  } catch (error) {
    console.error(error)
  }
}
