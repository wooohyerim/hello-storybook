import { MouseEventHandler } from 'react'

type IconButtonProp = {
  iconPath: string
  alt: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const IconButton = ({ iconPath, onClick, alt }: IconButtonProp) => {
  return (
    <button onClick={onClick}>
      <img style={{ width: '1rem' }} src={iconPath} alt={alt} />
    </button>
  )
}

export default IconButton
