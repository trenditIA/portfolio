import React from 'react'

import "./hero.css"
import CircularAnimatedButton from '../../utilities/circularAnimatedButton/CircularAnimatedButton'
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className='hero-container'>
        <section className='hero-intro'>
            <img src="https://i.ibb.co/pvJzJyBB/myFace.webp" alt='me'/>
            <h1>Oviedo, Lucas</h1>
            <h3>{t("hero.title")}<br/><b>{t("hero.position")}</b></h3>
        </section>
        <section className='hero-info'>
            <p>{t("hero.description")}</p>
            <div>
                <a 
                    href={t("hero.linkCV")}
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                <CircularAnimatedButton
                    primaryColor="var(--color-violet-ligth)"
                    firstCircleColor="var(--color-violet-ligther)" 
                    secondCircleColor="var(--color-violet)"
                    title={t("hero.downloadCV")}
                />
                </a>
            </div>
        </section>
    </div>
  )
}
