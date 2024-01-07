import { createContext } from 'react';

interface IContext {
  isLoading: boolean;
  isAuth: boolean | null;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const AuthContext = createContext<IContext | null>(null);
