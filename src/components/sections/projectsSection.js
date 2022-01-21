import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../shared/card"

const ProjectsSection = () => {
  const { allProjectsJson, homeSectionsJson, allIconsJson } =
    useStaticQuery(graphql`
      {
        allProjectsJson {
          nodes {
            id
            icons
            description
            name
            url
          }
        }
        homeSectionsJson(sectionName: { eq: "projects" }) {
          sectionName
        }
        allIconsJson {
          nodes {
            id
            name
            url
          }
        }
      }
    `)

  React.useEffect(() => {
    // Intersection Observer
    const projectElements = document.querySelectorAll(".project-item")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("show", entry.isIntersecting)
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: document.querySelector(`${sectionName}`),
        rootMargin: "-100px",
        threshold: 1.0,
      }
    )
    projectElements.forEach(item => observer.observe(item))
  }, [])

  const projects = allProjectsJson.nodes
  const { sectionName } = homeSectionsJson

  return (
    <section id={sectionName}>
      <h1 className="section-heading">{sectionName}</h1>
      <ul className="section-content">
        {projects.map((project, index) => {
          const icons = allIconsJson.nodes.filter(node =>
            project.icons.includes(node.name)
          )
          return (
            <ProjectTile
              key={project.id}
              index={index}
              project={project}
              icons={icons}
            />
          )
        })}
      </ul>
    </section>
  )
}

const ProjectTile = ({ index, project, icons }) => {
  return (
    <div className="project-item">
      <Card className="project-btn">
        <h4 className="project-name">{project.name}</h4>
        <ProjectIcons icons={icons} />
      </Card>
      <ProjectDescription content={project.description} />
    </div>
  )
}
const ProjectDescription = ({ content }) => {
  return <p className="project-desc">{content}</p>
}

const ProjectIcons = ({ icons }) => {
  return (
    <ul className="project-icons">
      {icons.map((i, index) => (
        <li key={index}>
          <img src={i.url} alt="" srcSet="" className="w-6 h-6" />
        </li>
      ))}
    </ul>
  )
}

export default ProjectsSection
