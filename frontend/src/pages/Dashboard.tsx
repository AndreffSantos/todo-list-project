import React from "react";
import Image from "../components/Image";
import Title from "../components/Title";
import DashboardBanner from "../assets/DashboardBanner.svg"
import Text from "../components/Text";
import Button from "../components/Button";
import { getTasks } from "../libs/axios";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai"


export default function Dashboard() {
  const navigate = useNavigate()
  const [tasks, setTasks] = React.useState([] as string[]);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (user?.password) {
      getTasks(user.password).then(response => {
        setTasks(response)
      })
    }
  }, [])

  const handleClick = () => {
    navigate("/AddTodo")
  };

  return (
    <section>
      <div className="container">
        <Image image="" alt="Foto de perfil" />
        <Title title={`Bem Vindo #USER!`} />
        <Image image={DashboardBanner} alt="Garota de bicicleta" />
        <Text text="Tarefas a fazer." />
        <Button onClick={ handleClick } className="add_button">
          <AiOutlinePlus style={{marginRight: 15}} />
          <Text text='Nova Tarefa' />
        </Button>

        <div className="checkbox_container">
          {
            tasks.map((task: string, index: number) => (
              <label key={index}  style={{color: '#FFFFFF'}}>
                <input type="checkbox" className="input_checkbox"/>
                {task.charAt(0).toUpperCase() + task.slice(1)}
              </label>
            ))
          }
        </div>

      </div>

    </section>
  )
}