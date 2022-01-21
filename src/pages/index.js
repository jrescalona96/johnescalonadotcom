import * as React from "react"
import Seo from "../components/shared/seo"
import Layout from "../components/shared/layout"
import HomeSection from "../components/sections/homeSection"
import ProjectsSection from "../components/sections/projectsSection"
import ExperienceSection from "../components/sections/experienceSection"
import "../styles/global.css"
import "../styles/projects.css"

const IndexPage = () => {
  React.useEffect(() => {
    // Intersection Observer
    const headers = document.querySelectorAll(".section-heading")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("animated", entry.isIntersecting)
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "-100px" }
    )
    headers.forEach(item => observer.observe(item))
  }, [])

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
