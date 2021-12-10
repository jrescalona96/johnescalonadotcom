import * as React from "react"
import Seo from "../components/shared/seo"
import Layout from "../components/shared/layout"
import HomeSection from "../components/sections/homeSection"
import ProjectsSection from "../components/sections/projectsSection"
import ExperienceSection from "../components/sections/experienceSection"
import "../styles/global.css"
import "../styles/projects.css"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HomeSection />
      <ProjectsSection />
      <ExperienceSection />
    </Layout>
  )
}

export default IndexPage
