import { MouseEventHandler } from 'react'

type PrimaryButtonTheme = 'dark' | 'light' | 'social' | 'text'

type PrimaryButtonProp = {
  theme: PrimaryButtonTheme
  children: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled: boolean
}

const dark = 'bg-primary text-white'
const light = 'bg-white text-primary'
const social = 'bg-social text-white'
const text = 'bg-transparent text-white'
const disabledStyle = 'disabled:bg-mono100 disabled:text-mono200'

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text
}

const PrimaryButton = ({
  theme,
  children,
  onClick,
  disabled
}: PrimaryButtonProp) => {
  return (
    <button
      className={`w-full h-[59px]  rounded-[5px] ${color[theme]} ${disabledStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
