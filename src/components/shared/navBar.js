import * as React from "react"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    {
      allHomeSectionsJson {
        nodes {
          sectionName
          slug
          id
        }
      }
    }
  `)

  return (
    <nav className="nav">
      {data.allHomeSectionsJson.nodes.map(l => (
        <NavBarItem key={l.id} data={l} />
      ))}
    </nav>
  )
}

const NavBarItem = ({ data }) => {
  return (
    <a className="nav-btn" href={`${data.slug}`}>
      {data.sectionName}
    </a>
  )
}

export default NavBar
