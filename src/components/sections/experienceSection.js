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

  const events = data.allEventsJson.nodes.sort((a, b) => {
    return !b.endDate || a.endDate.y < b.endDate.y ? 1 : -1
  })

  const getYears = (start, end) => {
    var map = new Map()
    events.forEach(item => {
      if (item.endDate) {
        map.set(item.endDate.y, item.endDate.m)
      }
    })
    return Array.from(map.keys())
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

  const years = getYears(2007, 2021)
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const grouped = groupEvents(events)

  let right = true
  return (
    <section id={sectionName}>
      <h1 className="section-heading">{sectionName}</h1>
      <div className="section-content">
        <ul className="experience-year">
          {years.map(y => (
            <li key={y}>
              <p className="experience-year-heading">{y + 1}</p>
              <ul className="timeline">
                {months.map(m => {
                  let key = y ? `${m}${y}` : "Present"
                  let data = grouped[key]
                  if (data) {
                    right = !right
                    return ExperienceItem({
                      right: right,
                      data: data,
                    })
                  } else {
                    return <div key={key} className="month"></div>
                  }
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const ExperienceItem = ({ right, data }) => {
  const { id, eventName, entity, description, startDate, endDate } = data

  return (
    <li key={id} className={`experience-item ${right ? "right" : "left"}`}>
      <div className="experience-content tile">
        <h4 className="experience-name">{eventName}</h4>
        <p className="experience-sub-heading">{entity}</p>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default ExperienceSection
