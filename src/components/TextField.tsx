import { ChangeEventHandler, MouseEventHandler } from 'react'

import ErrorMessage from './ErrorMessage'
import IconButton from './IconButton'

type TextFieldProps = {
  errorMessage: string
  iconAlt: string
  iconPath: string
  onClick: MouseEventHandler<HTMLButtonElement>
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
  isError: boolean
}

const TextField = ({
  errorMessage,
  iconPath,
  iconAlt,
  onClick,
  onChange,
  value,
  placeholder,
  isError
}: TextFieldProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <IconButton onClick={onClick} alt={iconAlt} iconPath={iconPath} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
}

export default TextField
