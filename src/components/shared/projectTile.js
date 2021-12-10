import * as React from "react"
import "../../styles/projects.css"

const ProjectTile = ({ index, project }) => {
  return index % 2 > 0 ? (
    <li className="project-item">
      {
        <>
          <p className="project-desc text-right">{project.description}</p>
          <div className="project-btn tile">
            <h4 className="project-name">{project.name}</h4>
            <ul className="project-icons">
              {project.icons.map(icon => (
                <p>{icon}</p>
              ))}
            </ul>
          </div>
        </>
      }
    </li>
  ) : (
    <li className="project-item">
      {
        <>
          <div className="project-btn tile">
            <h4 className="project-name">{project.name}</h4>
            <ul className="project-icons">
              {project.icons.map(icon => (
                <p>{icon}</p>
              ))}
            </ul>
          </div>
          <p className="project-desc">{project.description}</p>
        </>
      }
    </li>
  )
}

const Icons = ({ icons }) => {
  return icons.map(icon => <p>{icon}</p>)
}

export default ProjectTile
