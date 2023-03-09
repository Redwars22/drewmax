import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../data/login";
import { IValidation } from "../types/types";

const UserContext = createContext({
  isLogged: false,
  isActive: false,
  validateLogin: (user: string, password: string): IValidation => "error",
  logout: () => {},
});

const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
  value: null;
}) => {
  const [isLogged, setIsLogged] = useState(false);
  const isActive = false;

  const validateLogin = (user: string, password: string) => {
    if (user === login.email && password === login.password) {
      setIsLogged(true);
      return "success";
    } else {
      return "error";
    }
  };

  const logout = () => {
    setIsLogged(false);
  };

  const values = {
    isLogged,
    isActive,
    validateLogin,
    logout,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
