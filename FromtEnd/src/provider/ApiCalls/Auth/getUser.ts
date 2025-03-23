import { User } from "../../../core/Generics/types/User";


export const getUser = async (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user =localStorage.getItem('user')
            resolve(user ? JSON.parse(user) : null);
        }, 1000); 
    });
};