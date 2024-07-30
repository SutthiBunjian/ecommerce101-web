import { createContext, useState, ReactNode, useEffect } from "react";
import { User } from "../types/User";
import { dummyUser as dummyUsers } from "../data/Users"; // Renamed to avoid conflict

interface UserList {
  isLoggedIn: boolean;
  users: User[];
  setIsLoggedIn: (loggedIn: boolean) => void;
  setUsers: (users: User[]) => void;
}

const UserContext = createContext<UserList | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    setUserList(dummyUsers);
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        users: userList,
        setIsLoggedIn,
        setUsers: setUserList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
