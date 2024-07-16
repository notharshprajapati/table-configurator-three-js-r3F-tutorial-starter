import { createContext, useContext, useState } from "react";
const ConfiguratorContext = createContext();
export const ConfiguratorProvider = ({ children }) => {
  return (
    <ConfiguratorContext.Provider>{children}</ConfiguratorContext.Provider>
  );
};
export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
