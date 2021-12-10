import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectTile from "../shared/projectTile"

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
      <h1 className="section-heading">{sectionName}</h1>
      <ul className="section-content space-y-10">
        {projects.map((project, index) => (
          <ProjectTile index={index} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
