import React, { useEffect, useState } from "react"
import { getSpellData } from "../services/fetchers"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

function SpellDetailsPage() {
  const params = useParams()
  const [spellData, setSpellData] = useState(null)

  const fetchSpellData = () => {
    getSpellData(params.index).then((spellDetails) =>
      setSpellData(spellDetails)
    )
  }

  useEffect(fetchSpellData, [])

  if (!spellData) {
    return <h1>Loading</h1>
  }

  console.log(spellData)

  return (
    <div className="spell-details">
      <NavBar />
      <div className="container">
        <h1 className="title">{spellData.name}</h1>
        <div className="section">
          <h2 className="subTitle">Details</h2>
          <div className="detailRow">
            <strong>Level:</strong> <span>{spellData.level}</span>
          </div>
          <div className="detailRow">
            <strong>School:</strong> <span>{spellData.school.name}</span>
          </div>
          <div className="detailRow">
            <strong>Casting Time:</strong>{" "}
            <span>{spellData["casting_time"]}</span>
          </div>
          <div className="detailRow">
            <strong>Range:</strong> <span>{spellData.range}</span>
          </div>
          <div className="detailRow">
            <strong>Components:</strong>{" "}
            <span>
              {spellData.components.map((component) => component + " ")}
            </span>
          </div>
          <div className="detailRow">
            <strong>Duration:</strong> <span>{spellData.duration}</span>
          </div>
          <div className="section">
            <h2 className="subTitle">Description</h2>
            <p className="text">{spellData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpellDetailsPage
