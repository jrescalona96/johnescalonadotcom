import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/experience.css"

const ExperienceSection = () => {
  const data = useStaticQuery(graphql`
    {
      allEventsJson {
        nodes {
          entity
          eventName
          description
          endDate {
            d
            m
            y
          }
          startDate {
            m
            d
            y
          }
        }
      }
      homeSectionsJson(sectionName: { eq: "experience" }) {
        sectionName
      }
    }
  `)

  const { sectionName } = data.homeSectionsJson
  // const education = data.allEducationJson.nodes
  // const professional = data.allProfessionalJson.nodes
  // const allExperiences = [...education, ...professional].sort((a, b) =>
  //   a.years[0] < b.years[0] ? 1 : -1
  // )
  const events = data.allEventsJson.nodes.sort((a, b) => {
    if (!b.endDate) {
      return 1
    }
    return a.endDate.y < b.endDate.y ? 1 : -1
  })

  const getYears = (start, end) => {
    let arr = []
    for (let i = end; i >= start; i--) {
      arr.push(i)
    }
    return arr
  }

  const groupEvents = events => {
    let map = {}
    events.forEach(item => {
      if (!item.endDate) {
        map["Present"] = item
      } else {
        map[`${item.endDate.m}${item.endDate.y}`] = item
      }
    })
    return map
  }

  const years = getYears(2007, 2022)
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const grouped = groupEvents(events)
  let rightSide = false
  return (
    <section id={sectionName}>
      <h1 className="section-heading">{sectionName}</h1>
      <div className="section-content">
        <ul className="mx-auto">
          {years.map(y => (
            <li key={y}>
              <ul>
                {months.map(m => {
                  let key = y ? `${m}${y}` : "Present"
                  let data = grouped[key]
                  if (data) {
                    rightSide = !rightSide
                    return (
                      <li key={key}>
                        <div>
                          {ExperienceItem({ rightSide: rightSide, data: data })}
                        </div>
                      </li>
                    )
                  }
                })}
              </ul>
              <p className="experience-year">{y}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const ExperienceItem = ({ rightSide, data }) => {
  const { eventName, entity, description, startDate, endDate } = data
  const content = (
    <div className="experience-content">
      <h4 className="experience-name">{eventName}</h4>
      <p className="experience-sub-heading">{entity}</p>
      <p>{description}</p>
    </div>
  )

  if (rightSide) {
    return (
      <li className="experience-item text-right">
        <div className="w-2/3 px-10 py-5 border-r border-gray-300 box-border">
          {content}
        </div>
        <div className="w-2/3 px-10 py-5 border-l border-gray-300 box-border"></div>
      </li>
    )
  } else {
    return (
      <li className="experience-item">
        <div className="w-2/3 px-10 py-5 border-r border-gray-300 box-border"></div>
        <div className="w-2/3 px-10 py-5 border-l border-gray-300 box-border">
          {content}
        </div>
      </li>
    )
  }
}

export default ExperienceSection
