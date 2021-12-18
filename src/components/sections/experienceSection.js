import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/experience.css"
import Card from "../shared/card"

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
                  let content

                  if (data) {
                    right = !right
                    content = ExperienceItem({
                      right: right,
                      data: data,
                    })
                  } else {
                    content = <div className="month"></div>
                  }

                  return <li key={data ? data.id : key}>{content}</li>
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
  const { eventName, entity, description, startDate, endDate } = data

  let classes
  if (right) {
    classes = "transform translate-x-full text-left rounded-r-xl ml-0.5"
  } else {
    classes = "rounded-l-xl"
  }

  return (
    <Card className={`experience-item ${classes}`}>
      <h4 className="experience-name">{eventName}</h4>
      <p className="experience-sub-heading">{entity}</p>
      <p>{description}</p>
    </Card>
  )
}

export default ExperienceSection
