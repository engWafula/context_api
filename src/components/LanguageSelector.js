import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

export default function LanguageSelector() {
    const {onLanguageChange} = React.useContext(LanguageContext);
  return (
    <div>
      Select a language:
      <i className="flag us" onClick={()=>onLanguageChange("english")}/>
      <i className="flag nl" onClick={()=>onLanguageChange("dutch")}/>
    </div>

  )
}
