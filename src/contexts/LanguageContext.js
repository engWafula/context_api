import React from "react";


const Context =  React.createContext("english");

export const LanguageStore = ({children}) => {
  const [language, setLanguage] = React.useState("english");

  const onLanguageChange = (language) => {
    setLanguage(language);
  }
  return (
    <Context.Provider value={{language:language, onLanguageChange:onLanguageChange}}>
      {children}
    </Context.Provider>
  )
}

export default Context;