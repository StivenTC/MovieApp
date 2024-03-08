import { createContext, useContext, Context } from 'react'
import useFirebaseAuth from '../auth/useFirebaseAuth';
import { User, UserCredential } from 'firebase/auth';


export const AuthUserContext = createContext({
  authUser: {} as User | null,
  loading: true,
  logIn: (email: string, password: string) => { },
  signUp: (email: string, password: string) => { },
  logOut: async () => { }
});

export function AuthUserProvider({ children }: { children: JSX.Element; }) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>
      {children}
    </AuthUserContext.Provider>
  );
}


export const useAuth = () => useContext(AuthUserContext);
