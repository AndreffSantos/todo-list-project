import Button from "../components/Button";
import Form from "../components/Form";
import Image from "../components/Image";
import Input from "../components/Input";
import Title from "../components/Title";
import LoginBanner from "../assets/LoginBanner.svg"
import Text from "../components/Text";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../libs/axios'
import React, { ChangeEvent } from "react";


export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    email: '',
    password: ''
  });

  const isDisabled = !(
    /\w+@+\w+.com/.test(user.email) && /[\w\W]{6}/.test(user.password)
  )

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUser(
      {
        ...user,
        [target.name]: target.value,
      }
    )
  };

  const handleClick = () => {
    login(user).then(response => {
      localStorage.setItem('user', JSON.stringify(response))
      navigate('/Dashboard')
    })
  };

  return (
    <section>
      <div className="container">
        <Title title="Bem vindo de volta!"/>
        <Image image={LoginBanner} alt="Login" />
        <Form>
          <Input id="email" name="email" placeholder="Enter your Email address" onChange={handleChange}/>
          <Input placeholder="Confirme sua senha" id="password" name="password" type="password" onChange={handleChange}/>
        </Form>
        <Button onClick={ handleClick } disabled={isDisabled}>
          Entrar
        </Button>
        <Link to='/Signup'>
          <Text text="Inscreva-se" />
        </Link>
      </div>
    </section>
  )
}