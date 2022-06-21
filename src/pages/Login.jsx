import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const login = event => {
    event.preventDefault();
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Страница для логина</h1>
      <form >
        <MyInput type="text" placeholder="Введите логин" autoComplete="off"></MyInput>
        <MyInput type="password" placeholder="Введите пароль" autoComplete="off"></MyInput>
        <MyButton onClick={login}>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;