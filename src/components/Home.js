import React from 'react'
import Card1 from "./Card.js"
import Media from "./media"
const Home = () => {
  return (
    <div>
      <div className="card-container">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div className="card-container">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>

      <Media />
    </div>
  )
}

export default Home
