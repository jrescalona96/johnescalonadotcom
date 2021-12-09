import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HomeSection = () => {
  const { homeSectionsJson } = useStaticQuery(graphql`
    {
      homeSectionsJson(sectionName: { eq: "home" }) {
        heading
        subHeading
        description
        sectionName
      }
    }
  `)

  const { sectionName, heading, subHeading, description } = homeSectionsJson

  return (
    <section id={sectionName}>
      <h1>{heading}</h1>
      <h3>{subHeading}</h3>
      <ul>
        {description.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default HomeSection
