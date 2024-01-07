import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from '@/context/Context';

import MyButton from '../UI/button/MyButton';
import styles from './index.module.css';

const Layout = () => {
  const context = useContext(AuthContext);

  const logOut = () => {
    if (context) {
      context.setIsAuth(false);
      localStorage.removeItem('isAuth');
    }
  };
  return (
    <>
      <header className={styles.header}>
        <Link to={'/'}>Home</Link>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/about'}>About</Link>
        <MyButton onClick={logOut}>LogOut</MyButton>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
