import React from 'react'

import "./hero.css"
import CircularAnimatedButton from '../../utilities/circularAnimatedButton/CircularAnimatedButton'

export const Hero = () => {
  return (
    <div className='hero-container'>
        <section className='hero-intro'>
            <img src="https://i.ibb.co/nMWQLFWd/myFace.jpg" alt='me'/>
            <h1>Oviedo, Lucas</h1>
            <h3>Ingeniero informático - <b>Full stack developer</b></h3>
        </section>
        <section className='hero-info'>
            <p>Me apasionan los desafios y el aprender constante para superarme como persona y profesional.</p>
            <div>
                <CircularAnimatedButton
                    primaryColor="var(--color-violet-ligth)"
                    firstCircleColor="var(--color-violet-ligther)" 
                    secondCircleColor="var(--color-violet)"
                    title="Descargar CV"
                />
            </div>
        </section>
    </div>
  )
}
