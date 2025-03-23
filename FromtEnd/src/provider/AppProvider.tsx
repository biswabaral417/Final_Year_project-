import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import {RoutesProvider} from "./RoutesProvider";

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AuthProvider>
            <RoutesProvider>
                {children}
            </RoutesProvider>
        </AuthProvider>
    );
};

