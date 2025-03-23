import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AuthContextType } from "./providerTypes/AuthProviderTypes";
import { getUser } from "./ApiCalls/Auth/getUser";
import { User } from "../core/Generics/types/User";

// Create context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component to provide user data to children components
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchUserData();

        return () => {
        };
    }, []);

    const value = useMemo(() => ({ user, setUser }), [user]);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Render children only after loading is false */}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export default useAuth;
