import React from 'react'
import { render } from '@testing-library/react'
import PlayerInfoCard from './PlayerInfoCard'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    return <img {...props} />
  },
}))

// Mock the mapperFieldsName function
jest.mock('../../utils/mapperFieldsName', () => ({
  mapperFieldsName: jest.fn(() => [
    { label: 'Goals', value: 10 },
    { label: 'Assists', value: 5 },
    { label: 'Age', value: 25 },
  ]),
}))

describe('PlayerInfoCard', () => {
  const defaultProps = {
    id: '1',
    name: 'Player Name',
    position: 'Forward',
    selection: 'National Team',
    club: 'Club Name',
    goals: 10,
    assists: 5,
    age: 25,
    photo: '/player-photo.jpg',
  }

  it('renders player info correctly', () => {
    const { getByText, getByAltText } = render(
      <PlayerInfoCard {...defaultProps} />,
    )

    // Check if the image is rendered
    const image = getByAltText(defaultProps.name)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', defaultProps.photo)

    expect(getByText('Goals')).toBeInTheDocument()
    expect(getByText('10')).toBeInTheDocument()
    expect(getByText('Assists')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('Age')).toBeInTheDocument()
    expect(getByText('25')).toBeInTheDocument()
  })
})
