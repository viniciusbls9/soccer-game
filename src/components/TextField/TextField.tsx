import { useState } from 'react'
import { TextFieldProps } from './types'
import IconSearch from '../icons/SearchIcon'

const TextField = ({ handleConfirm }: TextFieldProps) => {
  const [value, setValue] = useState('')

  const shouldCallHandleConfirmFunction = !!value.trim()

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleConfirm({ value })}
        placeholder="Digite o nome do jogador"
        className="p-2 mr-3 text-black"
      />

      <button
        type="button"
        aria-label="Pesquisar Jogador"
        onClick={() =>
          shouldCallHandleConfirmFunction && handleConfirm({ value })
        }
        data-testid="confirm-button"
        className="bg-white p-3"
      >
        <IconSearch />
      </button>
    </div>
  )
}

export default TextField
