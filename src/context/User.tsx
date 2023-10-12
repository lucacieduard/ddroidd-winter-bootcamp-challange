import { createContext, useState } from "react";
import { UserCtx, data } from "../types";

export const UserContext = createContext({} as UserCtx);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<data>();

  const createUser = (user: data) => {
    setUser(user);
  };
  return (
    <UserContext.Provider value={{ createUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
