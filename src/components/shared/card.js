import * as React from "react"
import "../../styles/global.css"
import "../../styles/variables.css"

const Card = ({ children, className, onClick }) => {
  const style = className ? `card ${className}` : "card"
  return (
    <div className={style} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
