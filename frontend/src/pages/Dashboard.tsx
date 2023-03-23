import Image from "../components/Image";
import Title from "../components/Title";
import DashboardBanner from "../assets/DashboardBanner.svg"
import styles from "./Dashboard.module.css"
import Text from "../components/Text";

export default function Dashboard() {
  return (
    <section className={styles.container}>
      <Image image="" alt="Foto de perfil" />
      <Title title={`Bem Vindo #USER!`} />
      <Image image={DashboardBanner} alt="Garota de bicicleta" />
      <Text text="Tarefas a fazer." />

      
    </section>
  )
}