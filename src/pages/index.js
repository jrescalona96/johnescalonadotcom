import * as React from "react"
import Seo from "../components/shared/seo"
import Layout from "../components/shared/layout"
import AboutSection from "../components/sections/aboutSection"
import ProjectsSection from "../components/sections/projectsSection"
import ExperienceSection from "../components/sections/experienceSection"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
    </Layout>
  )
}

export default IndexPage
