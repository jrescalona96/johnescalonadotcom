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

  const links = data.allHomeSectionsJson.nodes

  return (
    <div className="nav">
      <nav className="nav-items">
        {links.map(l => (
          <NavBarItem key={l.id} data={l} />
        ))}
      </nav>
    </div>
  )
}

const NavBarItem = ({ data }) => {
  return (
    <a className="nav-btn" href={`#${data.sectionName}`}>
      {data.sectionName}
    </a>
  )
}

export default NavBar
