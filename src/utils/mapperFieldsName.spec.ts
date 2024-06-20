import { mapperFieldsName } from './mapperFieldsName'

describe('mapperFieldsName', () => {
  test('should call mapperFieldsName function and returns a object array with correct values', () => {
    const player = {
      id: '1',
      name: 'player',
      position: 'position',
      selection: 'selection',
      club: 'club',
      goals: 100,
      assists: 20,
      age: 31,
      photo: 'image.png',
    }

    const mapper = mapperFieldsName(player)

    const expectValue = [
      { label: 'Jogador', value: player.name },
      { label: 'Posição', value: player.position },
      { label: 'Seleção', value: player.selection },
      { label: 'Clube', value: player.club },
      { label: 'Gols', value: player.goals },
      { label: 'Assist', value: player.assists },
      { label: 'Idade', value: player.age },
    ]

    expect(mapper).toEqual(expectValue)
  })
})
