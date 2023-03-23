import { ReactNode } from "react"

interface FormInterface {
  children: ReactNode,
}

export default function Form({ children }: FormInterface) {
  return (
    <form>
      {children}
    </form>
  )
}