import React, { createContext } from "react";
import Store from "../store/store";

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({
  store,
});

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Context.Provider value={{ store }}>
    {children}
  </Context.Provider>
);