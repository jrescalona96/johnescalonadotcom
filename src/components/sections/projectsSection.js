import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProjectsSection = () => {
  const { allProjectsJson, homeSectionsJson } = useStaticQuery(graphql`
    {
      allProjectsJson {
        nodes {
          icons
          description
          name
        }
      }
      homeSectionsJson(sectionName: { eq: "projects" }) {
        sectionName
      }
    }
  `)

  const projects = allProjectsJson.nodes
  const { sectionName } = homeSectionsJson

  return (
    <section id={sectionName}>
      <h1>{sectionName}</h1>
      <ul>
        {projects.map(project => {
          return (
            <li>
              {
                <div>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <ul>
                    {project.icons.map(icon => (
                      <p>{icon}</p>
                    ))}
                  </ul>
                </div>
              }
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProjectsSection
