import React from 'react'
import Media from "./media"
import QatraCard from "./Card1"
import CardsObj from '../CardsObjects.js'

function CreateCard(CardObj) {
  return (
  <QatraCard
    name={CardObj.name}
    avatar1={CardObj.avatar1}
    content={CardObj.content}
    key={CardObj.id}
  />)
}
const Home = () => {
  return (
    <div>
      <div className="card-container">
          {CardsObj.map(CreateCard)}
      </div>
      <Media />
    </div>
  )
}

export default Home
