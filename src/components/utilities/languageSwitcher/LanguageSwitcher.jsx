import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import enFlag from "../../../assets/icons/flags/flag-us.svg";
import esFlag from "../../../assets/icons/flags/flag-spain.svg";

import './languageSwitcher.css';

const languages = [
  { code: 'en', label: 'English', flag: enFlag  },
  { code: 'es', label: 'Español', flag: esFlag },
];

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className='languageSwitcher-container' 
        style={{right: open ? "20px" : "38px"}}>
      <button onClick={() => setOpen(!open)} 
        style={{borderRadius: open ? "8px 8px 0 0" : "8px"}}
      > 🌐 {t('languageSwitcher.buttonLabel')} </button>
      {open && (
        <section>
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} alt={lang.label}/>
              <span>{lang.label}</span>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
