import Button from "../components/Button";
import Form from "../components/Form";
import Image from "../components/Image";
import Input from "../components/Input";
import Title from "../components/Title";
import LoginBanner from "../assets/LoginBanner.svg"

export default function Login() {
  return (
    <section>
      <div className="container">
        <Title title="Bem vindo de volta!"/>
        <Image image={LoginBanner} alt="Login" />
        <Form>
          <Input id="email" name="email" placeholder="Enter your Email address" />
          <Input placeholder="Confirme sua senha" id="password" name="password" type="password"/>
        </Form>
        <Button>
          Entrar
        </Button>
      </div>
    </section>
  )
}