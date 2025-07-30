import { createContext, useContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

interface IUser { id: string; name: string; role: 'FRESHER' | 'ADMIN'; }
interface IAuthCtx {
  user: IUser | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthCtx>({} as IAuthCtx);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('token');
    if (stored) login(stored);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    const decoded: any = jwtDecode(token);
    setUser({ id: decoded.sub, name: decoded.name, role: decoded.role });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
