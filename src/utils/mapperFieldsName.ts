import { PlayerInfoCardProps } from '@/components/PlayerInfoCard/types'

export const mapperFieldsName = (player: PlayerInfoCardProps) => {
  return [
    { label: 'Jogador', value: player.name },
    { label: 'Posição', value: player.position },
    { label: 'Seleção', value: player.selection },
    { label: 'Clube', value: player.club },
    { label: 'Gols', value: player.goals },
    { label: 'Assist', value: player.assists },
    { label: 'Idade', value: player.age },
  ]
}
