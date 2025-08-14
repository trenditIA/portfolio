import { ContactForm } from "../components/contact/contactForm/ContactForm"
import { HoleNetworks } from "../components/contact/holeNetworks/HoleNetworks"
import { LeftSideNetworks } from "../components/contact/leftSideNetworks/LeftSideNetworks"
import { RigthSideNetworks } from "../components/contact/rightSideNetworks/RigthSideNetworks"
import { Expertise } from "../components/home/expertise/Expertise"
import { Hero } from "../components/home/hero/Hero"
import { Proyects } from "../components/home/proyects/Proyects"
import { LanguageSwitcher } from "../components/utilities/languageSwitcher/LanguageSwitcher"


const HomePage = () => {
  return (
    <div>
        <LanguageSwitcher/>

        <Hero/>
        <Proyects/>
        <Expertise/>

        <ContactForm/>

        <HoleNetworks/>
        <LeftSideNetworks/>
        <RigthSideNetworks/>
    </div>
  )
}

export default HomePage