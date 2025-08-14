import "./contactForm.css"

import dotsPattern from "../../../assets/icons/patterns/bottomDots.svg"
import CircularAnimatedButton from "../../utilities/circularAnimatedButton/CircularAnimatedButton"
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-form-container">
      <h2>{t("contact.title")}</h2>
        <a href="mailto:lucasoviedolucas@gmail.com">
          <CircularAnimatedButton
              primaryColor="var(--color-violet-ligth)"
              firstCircleColor="var(--color-violet-ligther)" 
              secondCircleColor="var(--color-violet)"
              title={t("contact.button")}
          />
        </a>
      <img src={dotsPattern} alt="dots"/>
    </div>
  )
}
