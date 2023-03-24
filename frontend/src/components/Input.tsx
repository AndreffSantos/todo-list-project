interface InputType {
  type?: string,
  id: string,
  name: string,
  placeholder: string
}

export default function Input(
  {
    type='text',
    id,
    name='',
    placeholder,
  }: InputType
) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  )
}