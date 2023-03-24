import TodoBanner from "../assets/TodoBanner.svg"
import Button from "../components/Button";
import Form from "../components/Form";
import Image from "../components/Image";
import Input from "../components/Input";
import Text from "../components/Text";
import Title from "../components/Title";

export default function AddTodo() {
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
          <Input id="task" name="task" placeholder="Nova Tarefa" />
        </Form>

        <Button>
          Adicionar a lista
        </Button>
      </div>
    </section>
  )
}