import React, { ReactNode, useEffect, useMemo, useState } from "react";
import type RoutesContextTypes from "./providerTypes/RoutesContextTypes";
import useAuth from "./AuthProvider"; // Ensure correct import
import publicRoutes from "../router/routes/publicRoutes";
import adminRoutes from "../router/routes/adminRoutes";
import userRoutes from "../router/routes/userRoutes";

const RoutesContext = React.createContext<RoutesContextTypes | null>(null);

export const RoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    
    // Check if user is admin
    const isAdmin = user?.role === "admin";

    const routesConfig = useMemo(() => {
        if (!user) return publicRoutes;  // If no user, return public routes
        return isAdmin ? adminRoutes : userRoutes;  // Based on role, choose routes
    }, [user, isAdmin]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeoutId);  
    }, []);

    const contextValue = useMemo(
        () => ({ routesConfig, loading }),
        [routesConfig, loading]
    );

    return (
        <RoutesContext.Provider value={contextValue}>
            {children}
        </RoutesContext.Provider>
    );
};

export const useRoutesContext = (): RoutesContextTypes => {
    const context = React.useContext(RoutesContext);
    if (!context) {
        throw new Error("useRoutesContext must be used within a RoutesProvider");
    }
    return context;
};

export default useRoutesContext;
