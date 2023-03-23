interface InputType {
  type: string,
  id: string,
  name: string
}

export default function Input(
  {
    type='text',
    id,
    name=''
  }: InputType
) {
  return (
    <input
      type={type}
      id={id}
      name={name}
    />
  )
}