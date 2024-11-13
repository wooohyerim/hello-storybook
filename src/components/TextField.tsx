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
  const [isFocused, setIsFocused] = useState(false)
  const borderColor = isFocused
    ? 'border-secondary'
    : !value
      ? 'border-mono300'
      : 'border-primary'
  return (
    <div>
      <div
        className={`
        border-b 
      text-primary 
        ${borderColor}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
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
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
}

export default TextField
