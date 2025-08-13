import React from 'react'

import './sectionLabel.css';

export const SectionLabel = ({text}) => {
  return (
    <div className="section-label-container">
      <section>
        <hr/>
        <span><b>{text}</b></span>
        <hr/>
      </section>
    </div>
  )
}
