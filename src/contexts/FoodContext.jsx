import { createContext, useState, useContext } from 'react';

export const ArteContext = createContext({});

export function ArteContextProvider({ children }) {
  const [artes, setArtes] = useState([]);
  const [isShowArteForm, setIsShowArteForm] = useState(false);

  const toggleArteForm = () => {
    setIsShowArteForm(!isShowArteForm);
  };

  return (
    <ArteContext.Provider
      value={{
        artes,
        setArtes,
        isShowArteForm,
        setIsShowArteForm,
        toggleArteForm,
      }}
    >
      {children}
    </ArteContext.Provider>
  );
}

export function useArte() {
  return useContext(ArteContext);
}
