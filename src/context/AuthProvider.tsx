import React, { ReactNode, createContext, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext();

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
