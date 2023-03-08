import { createContext, useState } from "react";

const UserContext = createContext({
  isLogged: false,
  isActive: false,
});

const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
  value: null;
}) => {
  const [isLogged, setIsLogged] = useState(false);
  const isActive = false;

  const values = {
    isLogged,
    isActive,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
