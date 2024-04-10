import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string
  username: string;
  // Add more user properties as needed
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps>({
  user: {id: "123", username: "Celio"},
  setUser: () => {},
});

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  return {
    user,
    setUser,
  };
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { user, setUser } = useUser();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
