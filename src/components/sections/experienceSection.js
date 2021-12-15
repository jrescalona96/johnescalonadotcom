import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/experience.css"

const ExperienceSection = () => {
  const data = useStaticQuery(graphql`
    {
      allEventsJson {
        nodes {
          id
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
  let leftSideContent = false
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
                    leftSideContent = !leftSideContent
                    return ExperienceItem({
                      leftSideContent: leftSideContent,
                      data: data,
                    })
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

const ExperienceItem = ({ leftSideContent, data }) => {
  const { id, eventName, entity, description, startDate, endDate } = data
  const content = (
    <div className="experience-content">
      <h4 className="experience-name">{eventName}</h4>
      <p className="experience-sub-heading">{entity}</p>
      <p>{description}</p>
    </div>
  )

  return (
    <li
      key={id}
      className={`experience-item ${leftSideContent ? "text-right" : ""}`}
    >
      <div className="border-r">{leftSideContent ? content : ""}</div>
      <div className="border-l">{!leftSideContent ? content : ""}</div>
    </li>
  )
}

export default ExperienceSection
