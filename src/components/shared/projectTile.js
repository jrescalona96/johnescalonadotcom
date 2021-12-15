import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/projects.css"

const ProjectTile = ({ index, project }) => {
  const data = useStaticQuery(graphql`
    {
      allIconsJson {
        nodes {
          id
          name
          url
        }
      }
    }
  `)

  console.log(data)

  const icons = data.allIconsJson.nodes.filter(node =>
    project.icons.includes(node.name)
  )

  return index % 2 > 0 ? (
    <li className="project-item">
      {
        <>
          <p className="project-desc text-right">{project.description}</p>
          <div className="project-btn tile flex flex-col justify-between">
            <h4 className="project-name">{project.name}</h4>
            <ProjectIcons icons={icons} />
          </div>
        </>
      }
    </li>
  ) : (
    <li className="project-item">
      {
        <>
          <div className="project-btn tile flex flex-col justify-between">
            <h4 className="project-name">{project.name}</h4>
            <ProjectIcons icons={icons} />
          </div>
          <p className="project-desc">{project.description}</p>
        </>
      }
    </li>
  )
}

const ProjectIcons = ({ icons }) => {
  return (
    <ul className="project-icons">
      {icons.map((i, index) => (
        <li key={index}>
          <img src={i.url} alt="" srcset="" className="w-6 h-6" />
        </li>
      ))}
    </ul>
  )
}

export default ProjectTile
