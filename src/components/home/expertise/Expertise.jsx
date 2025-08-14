import "./expertise.css"

import { SectionLabel } from '../../utilities/sectionLabel/SectionLabel'

import technologies from "../../../utilities/technologies.json"
import { useTranslation } from "react-i18next";

export const Expertise = () => {
  const { t } = useTranslation();

  return (
    <div className="expertise-container">
      <SectionLabel text={t("expertise.sectionLabel")}/>
      <h4>{t("expertise.description")}</h4>

      <h3>{t("expertise.studies")}</h3>
      <h5>{t("expertise.studiesDescription")}</h5>
      <ul>
        <li><span><b>{t("expertise.studyOne.name")}</b></span><br/>{t("expertise.studyOne.university")} (2025-{t("expertise.currently")})</li>
        <h5>{t("expertise.studyOne.knowledge")}</h5>
        <li><span><b>{t("expertise.studyTwo.name")}</b></span><br/>{t("expertise.studyTwo.university")} (2024)</li>
        <h5>{t("expertise.studyTwo.knowledge")}</h5>
        <li><span><b>{t("expertise.studyThree.name")}</b></span><br/>{t("expertise.studyThree.university")} (2017-2023)</li>
        <h5>{t("expertise.studyThree.knowledge")}</h5>
      </ul>

      <h3>{t("expertise.work")}</h3>
      <h5>{t("expertise.workDescription")}</h5>
      <ul>
        <li><span><b>{t("expertise.workOne.position")}</b></span><br/> {t("expertise.workOne.company")} (09/2024-{t("expertise.currently")})</li>
        <h5>{t("expertise.workOne.activity")}</h5>
        <li><span><b>{t("expertise.workTwo.position")}</b></span><br/>{t("expertise.workTwo.company")} (10/2022-08/2024)</li>
        <h5>{t("expertise.workTwo.activity")}</h5>
        <li><span><b>{t("expertise.workThree.position")}</b></span><br/>{t("expertise.workThree.company")}L (10/2021-10/2022)</li>
        <h5>{t("expertise.workThree.activity")}</h5>
      </ul>

      <h2>{t("expertise.titleInit")} <b>{t("expertise.titleFinish")}</b></h2>
      <h4>{t("expertise.titleDescription")}</h4>
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
