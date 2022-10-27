import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import { useContext } from 'react'

export default function Field() {
    const context = useContext(LanguageContext)

    const text = context.language === 'english' ? 'Name' : 'Naam'

  return (
    <div className='ui field'>
      <label>{text}</label>
      <input />
    </div>
  )
}
