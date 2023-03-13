import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../data/login";
import { IValidation } from "../types/types";
import { useUserStore } from "../store/UserStore";

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
  const [isLogged, setIsLogged] = useState(useUserStore.getState().isLogged);
  const isActive = true;

  const validateLogin = (user: string, password: string) => {
    if (user === login.email && password === login.password) {
      setIsLogged(true);
      useUserStore.setState((s) => ({
        ...s,
        isLogged: true,
      }));
      return "success";
    } else {
      return "error";
    }
  };

  const logout = () => {
    setIsLogged(false);
    useUserStore.setState((s) => ({
      ...s,
      isLogged: false,
    }));
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
