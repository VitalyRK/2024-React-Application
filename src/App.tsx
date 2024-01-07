import { useEffect, useState } from 'react';

import { AuthContext } from './context/Context';
import AppRouter from './router/AppRouter';

import './styles/app.css';

function App() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true);
    } else setIsAuth(false);
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
