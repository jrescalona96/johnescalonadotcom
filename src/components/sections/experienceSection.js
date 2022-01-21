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
  const events = data.allEventsJson.nodes

  React.useEffect(() => {
    // Intersection Observer
    const timelineElements = document.querySelectorAll(".timeline")
    const experienceItems = document.querySelectorAll(".experience-item")
    const yearHeadingItems = document.querySelectorAll(
      ".experience-year-heading"
    )
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("show", entry.isIntersecting)
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
          }
        })
      },
      { root: document.querySelector(`${sectionName}`), rootMargin: "-50px" }
    )
    timelineElements.forEach(item => observer.observe(item))
    experienceItems.forEach(item => observer.observe(item))
    yearHeadingItems.forEach(item => observer.observe(item))
  }, [sectionName])

  const getSortedYears = (start, end) => {
    var map = new Map()
    events.forEach(item => {
      const date = item.startDate
      if (date) {
        map.set(date.y, null)
      }
    })

    const sorted = Array.from(map.keys()).sort((a, b) => {
      return a < b ? 1 : -1
    })

    if (!sorted.includes(end)) {
      sorted.unshift(end)
    }

    return sorted
  }

  const groupEvents = events => {
    let map = {}
    events.forEach(item => {
      map[`${item.startDate.m}${item.startDate.y}`] = item
    })
    return map
  }

  const isOnRight = () => {
    right = !right

    return right
  }

  const years = getSortedYears(2007, 2022)
  const grouped = groupEvents(events)

  let right = false

  return (
    <section id={sectionName}>
      <h1 className="section-heading">{sectionName}</h1>
      <div className="section-content">
        <ul className="experience-year">
          {years.map(y => (
            <Year key={y} year={y} isOnRight={isOnRight} events={grouped} />
          ))}
        </ul>
      </div>
    </section>
  )
}

const Year = ({ year, isOnRight, events }) => {
  const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  return (
    <li key={year}>
      <ul className="timeline">
        {months.map(m => {
          let key = `${m}${year}`
          let data = events[key]
          if (data) {
            let { id } = data
            return (
              <li id={id} key={id}>
                <ExperienceItem isOnRight={isOnRight} data={data} />
              </li>
            )
          } else {
            return <li key={key} className="month"></li>
          }
        })}
      </ul>
      <p className="experience-year-heading">{year}</p>
    </li>
  )
}

const ExperienceItem = ({ isOnRight, data }) => {
  const { eventName, entity, description } = data
  let classes
  if (isOnRight()) {
    classes = "right"
  } else {
    classes = "left"
  }

  const toggleDesription = () => {
    try {
      const element = document.querySelector(
        `#${data.id} > .experience-item > .experience-description`
      )
      element.classList.toggle("show")
    } catch (error) {
      return
    }
  }

  return (
    <Card className={`experience-item ${classes}`} onClick={toggleDesription}>
      <h4 className="experience-name">{eventName}</h4>
      <p className="experience-sub-heading">{entity}</p>
      <p className={"experience-description"}>{description}</p>
    </Card>
  )
}

export default ExperienceSection
