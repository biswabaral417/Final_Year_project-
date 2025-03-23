import { User } from "../../core/Generics/types/User";

// Interface for AuthContext Value
export interface AuthContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>; // Add setter for user
}
