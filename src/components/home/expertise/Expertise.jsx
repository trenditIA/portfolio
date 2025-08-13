import "./expertise.css"

import { SectionLabel } from '../../utilities/sectionLabel/SectionLabel'

import technologies from "../../../utilities/technologies.json"

export const Expertise = () => {
  return (
    <div className="expertise-container">
      <SectionLabel text={"Background"}/>
      <h4>Creo en la formación continua como base para innovar y mantenerme vigente en un entorno tecnológico en constante cambio. Busco siempre nuevos desafíos que me permitan crecer y aportar valor en cada proyecto.</h4>

      <h3>Estudios</h3>
      <h5>~ Motor que impulsa mi curiosidad y me motiva a aprender más sobre el mundo, ampliando asi mis horizontes, perspectivas y capacidades.</h5>
      <ul>
        <li><span><b>Maestria en gestion y administracion de organizaciones</b></span><br/> Universidad Blas Pascal (2025-Actualidad)</li>
        <h5>Para comprender la gestión estratégica de empresas tecnológicas y desarrollar habilidades para liderar proyectos y optimizar recursos.</h5>
        <li><span><b>Liderazgo UX/UI</b></span><br/> Universidad Siglo XXI (2024)</li>
        <h5>Integro metodologías centradas en el usuario, colaborando eficientemente con diseñadores y equipos multidisciplinarios.</h5>
        <li><span><b>Ingenieria informatica</b></span><br/> Universidad Blas Pascal (2017-2023)</li>
        <h5>Base sólida en desarrollo de software, algoritmos, bases de datos y sistemas, aplicable a soluciones innovadoras.</h5>
      </ul>

      <h3>Trabajo</h3>
      <h5>~ Herramienta que consolida y profundiza mis conocimientos, transformando la experiencia en aprendizaje práctico y duradero.</h5>
      <ul>
        <li><span><b>Director de proyecto / Desarrollador full stack</b></span><br/> AxonQbit (09/2024-Actualidad)</li>
        <h5>Lidero equipos multidisciplinarios, coordino proyectos web y aplicaciones, participo en definición de requerimientos junto a los stakeholders y desarrollo full stack.</h5>
        <li><span><b>Ingeniero de software Full Stack</b></span><br/> TrendIT SRL (10/2022-08/2024)</li>
        <h5>Desarrollé aplicaciones web full stack, integré scraping de datos, trabajé bajo metodologías ágiles (SCRUM) y gestioné proyectos con JIRA.</h5>
        <li><span><b>Desarrollador Full Stack JR</b></span><br/> TrendIT SRL (10/2021-10/2022)</li>
        <h5>Scraping de datos (Selenium, Python), APIs REST (Node.js) y Front-end (React). Manejo de metodologías ágiles (SCRUM) y herramientas de gestión (JIRA).</h5>
      </ul>

      <h2>Mi <b>expertice</b></h2>
      <h4>Algunas de las herramientas que uso para desarrollar a diario</h4>
      <div className='expertise-technologys'>
        {technologies.technologies.map((tech) => {
          return (
            <section key={tech.name} className='expertise-technology-item'>
              <img src={tech.icon} alt={tech.name}/>
              <h4>{tech.name}</h4>
            </section>
          )})}
      </div>
    </div>
  )
}
