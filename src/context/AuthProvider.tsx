import React, { ReactNode, createContext } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext();

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
