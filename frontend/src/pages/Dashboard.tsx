import Image from "../components/Image";
import Title from "../components/Title";
import DashboardBanner from "../assets/DashboardBanner.svg"
import Text from "../components/Text";

export default function Dashboard() {
  return (
    <section>
      <div className="container">
        <Image image="" alt="Foto de perfil" />
        <Title title={`Bem Vindo #USER!`} />
        <Image image={DashboardBanner} alt="Garota de bicicleta" />
        <Text text="Tarefas a fazer." />
      </div>
      
    </section>
  )
}