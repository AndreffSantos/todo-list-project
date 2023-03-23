import styles from './Home.module.css'
import HomeBanner from '../assets/HomeBanner.svg'
import Title from '../components/Title'
import Image from '../components/Image'
import Button from '../components/Button'
import Text from '../components/Text'

export default function Home() {
  return (
    <section className={styles.container}>
      <Image image={HomeBanner} alt='log'/>
      <Title title='Faça as coisas com TOdo' />
      <Text
        text={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.\
          Quae provident consectetur suscipit laborum velit quidem incidunt ducimus,\
          porro voluptas, soluta possimus cupiditate. Praesentium minus omnis ratione,\
          asperiores saepe eum optio!'
        }
      />
      <Button>
        Get Started
      </Button>
    </section>
  )
}