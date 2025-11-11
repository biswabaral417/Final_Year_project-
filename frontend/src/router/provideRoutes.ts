import { useState } from "react";
import { publicRoutes } from "./Routes/publicRoutes";

export const provideRoutes = () => {
    // const [isAdmin, setIsAdmin] = useState<boolean>(true)
    const [isAdmin] = useState<boolean>(false)
    if (isAdmin === true) {
      return [...publicRoutes];
    }
    else if (1) {
      return [...publicRoutes]
    }
    return [...publicRoutes];
  }