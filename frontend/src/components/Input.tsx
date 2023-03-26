import {  ChangeEventHandler } from "react"

interface InputType {
  type?: string,
  id: string,
  name: string,
  placeholder: string
  onChange: ChangeEventHandler
}

export default function Input(
  {
    type='text',
    id,
    name='',
    placeholder,
    onChange
  }: InputType
) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}