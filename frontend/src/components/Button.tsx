import { ReactNode } from "react"

interface ButtonInterface {
  children: ReactNode
}

export default function Button({ children }: ButtonInterface) {
  return (
    <button>
      { children }
    </button>
  )
}