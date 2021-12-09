import * as React from "react"
import { Link, useStaticQuery } from "gatsby"
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
    <header>
      <div>
        <ul>
          {links.map(l => (
            <li key={l.id}>
              <a href={`#${l.sectionName}`}>{l.sectionName}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default NavBar
