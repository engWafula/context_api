import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import { useContext } from 'react'

export default function Button() {

     const {language} = useContext(LanguageContext)
     const color = useContext(ColorContext)
     const text = language === 'english' ? 'Submit' : 'Voorleggen'

  
  return (
    <button className={`ui button ${color}`}>
        {text}
    </button>
  )
}
