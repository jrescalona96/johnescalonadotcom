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
        id
      }
    }
  `)

  const { sectionName, heading, subHeading, description } = homeSectionsJson

  return (
    <section id={sectionName}>
      <h1 className="section-heading text-left">{heading}</h1>
      <h2 className="sub-heading">{subHeading}</h2>
      <ul className="section-content md:w-2/3 lg:w-1/2">
        {description.map((item, index) => (
          <li key={index} className="pb-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomeSection
