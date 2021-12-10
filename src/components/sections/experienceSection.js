import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/projects.css"

const ExperienceSection = () => {
  const data = useStaticQuery(graphql`
    {
      allProfessionalJson {
        nodes {
          details
          name
          years
        }
      }
      allEducationJson {
        nodes {
          details
          name
          years
        }
      }
      homeSectionsJson(sectionName: { eq: "experience" }) {
        sectionName
      }
    }
  `)

  const { sectionName } = data.homeSectionsJson
  const education = data.allEducationJson.nodes
  const professional = data.allProfessionalJson.nodes

  return (
    <section id={sectionName}>
      <h1 className="section-heading">{sectionName}</h1>
      <div className="section-content">
        <ul>
          {education.map(({ name, details, years }) => {
            const duration = `${years.at(0)}-${years.at(-1)}`
            return (
              <li>
                {
                  <div>
                    <h4>{name}</h4>
                    <p>{details}</p>
                    <p>{duration}</p>
                  </div>
                }
              </li>
            )
          })}
        </ul>

        <ul id="professional">
          {professional.map(({ name, details, years }) => {
            const duration = `${years.at(0)}-${years.at(-1)}`
            return (
              <li>
                {
                  <div>
                    <h4>{name}</h4>
                    <p>{details}</p>
                    <p>{duration}</p>
                  </div>
                }
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ExperienceSection
