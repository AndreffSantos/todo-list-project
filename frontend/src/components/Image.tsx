interface ImageInterface {
  image: string,
  alt?: string
}

export default function Image({ image, alt }: ImageInterface) {
  return (
    <img src={image} alt={alt}/>
  )
}