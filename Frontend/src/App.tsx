import React from "react";
import Router from "./router";
import { AppProvider } from "./provider/AppProvider";
import "./App.css";
const App:React.FC = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;
