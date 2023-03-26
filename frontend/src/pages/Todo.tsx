import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import TodoBanner from "../assets/TodoBanner.svg"
import Button from "../components/Button";
import Form from "../components/Form";
import Image from "../components/Image";
import Input from "../components/Input";
import Text from "../components/Text";
import Title from "../components/Title";
import { addTask } from "../libs/axios";

export default function AddTodo() {
  const navigate = useNavigate();

  const [task, setTask] = React.useState('');

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTask(target.value)
  };

  const handleClick = () => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (user?.token) {
      addTask(task, user.token)
      navigate('/Dashboard')
    }
  };

  return (
    <section>
      <div className='container'>
        <Title title="Bem-vindo a bordo!" />
        <Image image={TodoBanner} alt="Casal Planejando" />
        <Text text="Adicione o que você deseja fazer mais tarde.." />

        <h2>
          Nova Tarefa:
        </h2>
        <Form>
          <Input id="task" name="task" placeholder="Nova Tarefa" onChange={handleChange} />
        </Form>

        <div style={{ display: "flex", flexDirection: "row", width: "40%", justifyContent: "space-evenly" }}>
          <Button onClick={handleClick}>
            Adicionar a lista
          </Button>

          <Button onClick={() => navigate('/Dashboard')}>
            Cancelar
          </Button>
        </div>
      </div>
    </section>
  )
}