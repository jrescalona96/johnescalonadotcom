import * as React from "react"
import "../../styles/global.css"
import "../../styles/variables.css"

const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>
}

export default Card
