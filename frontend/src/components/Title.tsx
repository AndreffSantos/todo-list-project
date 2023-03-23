interface TitleInterface {
  title: string
}

export default function Title({ title }: TitleInterface) {
  return (
    <h1>
      {title}
    </h1>
  )
}