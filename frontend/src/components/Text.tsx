interface TextInterface {
  text: string
}

export default function Text({ text }: TextInterface) {
  return (
    <p>{text}</p>
  )
}