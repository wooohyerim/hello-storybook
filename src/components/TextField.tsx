import { ChangeEventHandler, MouseEventHandler, useState } from 'react'

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
  id: string
}

const TextField = ({
  errorMessage,
  iconPath,
  iconAlt,
  onClick,
  onChange,
  value,
  placeholder,
  isError,
  id
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const borderColor = isFocused
    ? 'border-secondary'
    : !value
      ? 'border-mono300'
      : 'border-primary'
  return (
    <div className="relative">
      <div
        className={`
        border-b 
      text-primary 
        ${borderColor}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          id={id}
          className="outline-none"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && (
          <IconButton onClick={onClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && (
        <div className="absolute">
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
      )}
    </div>
  )
}

export default TextField
