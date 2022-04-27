import React, { createContext, useContext, useReducer } from "react";

//Preparing the data layer
export const StageContext = createContext();

//wrap our components, provide the provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateProvider.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateProvider.Provider>
);

//Assim podemos usá-lo dentro de um componente

export const UseStateValue = () => useContext(StateProvider);
