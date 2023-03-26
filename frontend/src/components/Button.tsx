import { ReactNode, MouseEventHandler } from "react"

interface ButtonInterface {
  children: ReactNode,
  onClick: MouseEventHandler,
  disabled?: boolean,
  className?: string
}

export default function Button({ children, onClick, disabled, className }: ButtonInterface) {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      { children }
    </button>
  )
}