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
      <h1 className="section-heading">{heading}</h1>
      <h2 className="sub-heading">{subHeading}</h2>
      <ul className="section-content w-1/2">
        {description.map(item => (
          <li className="pt-5">{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default HomeSection
