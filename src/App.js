import { useState } from "react";
import UserCreate from "./components/UserCreate";
import ColorContext from "./contexts/ColorContext";
import LanguageSelector from "./components/LanguageSelector";
import { LanguageStore } from "./contexts/LanguageContext";

function App() {

  return (
    <div className="ui container">
      <LanguageStore>
      <LanguageSelector/>

        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
}

export default App;
