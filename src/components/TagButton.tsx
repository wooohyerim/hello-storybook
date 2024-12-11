import { MouseEventHandler } from 'react'

type TagButtonProp = {
  children: string
  isChecked: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const TagButton = ({ children, onClick, isChecked }: TagButtonProp) => {
  const buttonStyle = isChecked
    ? 'bg-white text-primary'
    : 'text-white bg-dark-opacity'
  return (
    <button
      className={`rounded-[17.5px] px-[10px] border border-white h-[33px] font-medium ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TagButton
