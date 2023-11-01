import { useCookies } from 'react-cookie';
import React, { ReactNode, createContext, useEffect, useState } from 'react';

import connect from '../lib/connectAxios';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext();

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [load, setLoad] = useState(true);
  const [cookies] = useCookies(['session']);

  useEffect(() => {
    if (!cookies.session) return;
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookies.session}`,
      },
    };
    try {
      const getProfile = async () => {
        const { data } = await connect.user('/profile ', config);
        setAuth(data);
      };
      getProfile();
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
