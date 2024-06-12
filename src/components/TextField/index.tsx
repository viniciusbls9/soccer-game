import { TextFieldProps } from './types'

const TextField = ({ value, setValue }: TextFieldProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Digite o nome do jogador"
      // className="p-1 text-black"
    />
  )
}

export default TextField
