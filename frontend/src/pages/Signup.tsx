import Title from "../components/Title";
import Text from "../components/Text";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Signup() {
  return (
    <section>
      <div className="container">
        <Title title='Bem-vindo a bordo!' />
        <Text text='Vamos ajudá-lo a cumprir sua tarefa' />
        <Form>
          <Input id="nome" name="nome" placeholder="Escreva seu nome completo" />

          <Input id="email" name="email" placeholder="Insira o seu endereço de email" />

          <Input type="password" id="password" name="password" placeholder="Criar uma senha" />

          <Input type="password" id="password2" name="password2" placeholder="Confirme sua senha" />
        </Form>
        <Button>
          Inscrever-se
        </Button>
      </div>
    </section>
  )
}