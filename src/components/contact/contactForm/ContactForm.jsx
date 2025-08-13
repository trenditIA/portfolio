import "./contactForm.css"

import dotsPattern from "../../../assets/icons/patterns/bottomDots.svg"
import CircularAnimatedButton from "../../utilities/circularAnimatedButton/CircularAnimatedButton"

export const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contactame y comencemos a trabajar</h2>
        <a href="mailto:lucasoviedolucas@gmail.com">
          <CircularAnimatedButton
              primaryColor="var(--color-violet-ligth)"
              firstCircleColor="var(--color-violet-ligther)" 
              secondCircleColor="var(--color-violet)"
              title="Contactar"
          />
        </a>
      <img src={dotsPattern} alt="dots"/>
    </div>
  )
}
