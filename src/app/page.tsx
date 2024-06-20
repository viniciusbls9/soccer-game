'use client'

import { getPlayer } from '@/api/services/getPlayer/getPlayer'
import PlayerInfoCard from '@/components/PlayerInfoCard/PlayerInfoCard'
import { PlayerInfoCardProps } from '@/components/PlayerInfoCard/types'
import TextField from '@/components/TextField/TextField'
import { useState } from 'react'

export default function Home() {
  const [player, setPlayer] = useState<PlayerInfoCardProps[] | null>([])

  const handleSearchPlayer = async ({ value }: { value: string }) => {
    const newPlayer = await getPlayer(value)
    setPlayer((old) => [...(old as PlayerInfoCardProps[]), ...newPlayer])
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-14">
        <TextField handleConfirm={handleSearchPlayer} />
      </div>
      {player?.map((data) => <PlayerInfoCard key={data.id} {...data} />)}
    </div>
  )
}
