import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MyButton from '@/components/UI/button/MyButton';
import MyInput from '@/components/UI/input/MyInput';
import { AuthContext } from '@/context/Context';

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const login = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (context) {
      context.setIsAuth(true);
      localStorage.setItem('isAuth', 'true');
      navigate('/');
    }
  };
  return (
    <div>
      <h1>Login form</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Your login" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton>LogIn</MyButton>
      </form>
    </div>
  );
};

export default Login;
