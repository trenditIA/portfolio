import { Link } from "react-router-dom"

import './circularAnimatedButton.css'

// eslint-disable-next-line react/prop-types
const CircularAnimatedButton = ({primaryColor, firstCircleColor, secondCircleColor, title}) => {
  return (
    <span className="circularAnimatedButton-link">
      <button className="circularAnimatedButton" style={{background: primaryColor}}>
          <span className="button-circle-1" style={{background: firstCircleColor}}/>
          <span className="button-circle-2" style={{background: secondCircleColor}}/>
          {title}
      </button>
    </span>
  )
}

export default CircularAnimatedButton