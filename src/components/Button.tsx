import React from 'react'
import cn from 'classnames'

interface IButton {
  color: 'primary' | 'white'
  text: string
  onClick: () => void
  disabled?: boolean
  className?: string
}

const Button: React.FC<IButton> = ({
  color,
  text,
  onClick,
  disabled = false,
  className,
}: IButton): JSX.Element => {
  const colorVariants = {
    primary: 'bg-primaryActive hover:bg-primaryActive/80',
    white: 'bg-white hover:bg-gray-200',
  }

  return (
    <button
      disabled={disabled}
      onClick={() => onClick()}
      className={cn(
        `py-[10px] px-[15px] rounded-[5px] transition duration-300 ${colorVariants[color]}`,
        disabled && 'bg-red-400 hover:bg-red-500',
        className && className
      )}
    >
      {text}
    </button>
  )
}

export default Button
