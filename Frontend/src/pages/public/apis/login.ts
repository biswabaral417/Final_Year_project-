import { Dispatch, SetStateAction } from "react";
import { User } from "../../../core/Generics/types/User";
import { NavigateFunction } from "react-router-dom";

const login = ({ setUser, payload, navigate }: { setUser: Dispatch<SetStateAction<User | null>>, payload?: User, navigate: NavigateFunction }) => {
    console.log(payload)
    setUser({ name: 'User', email: 'email', role: 'user', id: '1' })
    localStorage.setItem('user', JSON.stringify({ name: 'User', email: 'email', role: 'user', id: '1' }))
    navigate('/')
}

export default login;