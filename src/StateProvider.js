//Preparando a camada de dados
import React, { createContext, useContext, useReducer } from "react";
//Esta é a camada de dados
export const StateContext = createContext();
//wrap our components, provide the provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Desta forma podemos usá-lo dentro de um componente
export const useStateValue = () => useContext(StateContext);
