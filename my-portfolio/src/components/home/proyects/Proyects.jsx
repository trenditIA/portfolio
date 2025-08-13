import "./proyects.css"

import { SectionLabel } from '../../utilities/sectionLabel/SectionLabel'

import proyects from "../../../utilities/proyects.json"

export const Proyects = () => {
  return (
    <div className='proyects-container'>
        <SectionLabel text={"Desarrollos"}/>
        <h4>Crear una sociedad me permitió liderar tres proyectos estratégicos que consolidaron la identidad y propuesta tecnológica de la empresa. Coordiné equipos multidisciplinarios, asegurando calidad, alineación con objetivos y alto impacto comercial.</h4>

        <h2>Mis <b>proyectos</b></h2>
        {proyects.projects.map((project) => {
          return (
            <section key={project.name} className='project-item' style={{ '--bg-color': project.backgroundColor }}>
              <div>
                <h5>{project.type}</h5>
                <h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <h4>{project.description}</h4>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} style={{border: `10px solid ${project.backgroundColor}`}}/>
              </a>
            </section>
          )
        })}
    </div>
  )
}
