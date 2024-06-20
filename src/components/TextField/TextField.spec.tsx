// TextField.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import TextField from './TextField'

describe('TextField Component', () => {
  const handleConfirm = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Should render the input field with correct placeholder', () => {
    render(<TextField handleConfirm={handleConfirm} />)

    const inputElement = screen.getByPlaceholderText('Digite o nome do jogador')
    expect(inputElement).toBeInTheDocument()
  })

  test('Should calls handleConfirm function on button click', async () => {
    render(<TextField handleConfirm={handleConfirm} />)

    const inputElement = screen.getByPlaceholderText('Digite o nome do jogador')
    const confirmButton = screen.getByTestId('confirm-button')
    const newValue = 'New Value'

    await userEvent.type(inputElement, newValue)
    await userEvent.click(confirmButton)

    expect(handleConfirm).toHaveBeenCalledWith({ value: newValue })
    expect(inputElement).toHaveValue(newValue)
  })

  test('Should not calls handleConfirm function when click on the button but input is empty', async () => {
    render(<TextField handleConfirm={handleConfirm} />)

    const confirmButton = screen.getByTestId('confirm-button')

    await userEvent.click(confirmButton)

    expect(handleConfirm).not.toHaveBeenCalled()
  })
})
