import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/home.css"

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
      <HomeTextContent
        heading={heading}
        subHeading={subHeading}
        description={description}
      />
      <StaticImage
        className="profile-img"
        alt="This is me. Couple of years ago. Generally how I look like."
        src="../../images/profile-pic-chicago.jpg"
      />
    </section>
  )
}

const HomeTextContent = ({ heading, subHeading, description }) => {
  return (
    <div className="section-content">
      <h1 className="greeting">{heading}</h1>
      <ul>
        {description.map((item, index) => (
          <li key={index} className="pb-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeSection
