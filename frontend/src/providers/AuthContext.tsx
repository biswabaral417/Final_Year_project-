import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext<any>(null); //TO-DO turn any to reasonable type

export const AuthProvider:React.FC<{children:React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<{email:string|null,uid:string|null,token:string|null}|null>(null); // { email, uid, token }

  const signup:(email:string,password:string)=>void = async (email, password) => {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const token = await userCred.user.getIdToken();
    setUser({ email, uid: userCred.user.uid, token });
  };

  const login:(email:string,password:string)=>void = async (email, password) => {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCred.user.getIdToken();
    setUser({ email, uid: userCred.user.uid, token });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
};