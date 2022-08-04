import {createContext} from "react";

// I like the verbosity of creating a context type separate
type SelectedContextType = {
    removeTodo: (id: number) => void;
  }

const Context = createContext<SelectedContextType| undefined>(undefined);

export  default  Context
