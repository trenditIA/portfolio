import "./proyects.css"

import { SectionLabel } from '../../utilities/sectionLabel/SectionLabel'

import proyects from "../../../utilities/proyects.json"
import { useTranslation } from "react-i18next";

export const Proyects = () => {
  const { t } = useTranslation();

  return (
    <div className='proyects-container'>
        <SectionLabel text={t("projects.sectionLabel")}/>
        <h4>{t("projects.description")}</h4>

        <h2>{t("projects.titleInit")} <b>{t("projects.titleFinish")}</b></h2>
        {proyects.projects.map((project) => {
          return (
            <section key={project.name} className='project-item' style={{ '--bg-color': project.backgroundColor }}>
              <div>
                <h5>{t(`projects.projects.${project.key}.type`)}</h5>
                <h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title} [{t(`projects.projects.${project.key}.type`)}]
                  </a>
                </h3>
                <h4>{t(`projects.projects.${project.key}.description`)}</h4>
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
