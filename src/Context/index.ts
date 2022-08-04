import {createContext} from 'react';

// I like the verbosity of creating a context type separate
type AuthContextType = {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
  }
const AuthContext = createContext<AuthContextType| undefined>(undefined);
export  default  AuthContext
