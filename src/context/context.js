import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    comment: "",
  });

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
