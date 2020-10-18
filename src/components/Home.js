import React from 'react'
import Media from "./media"
import RecipeReviewCard from "./Card1"
const Home = () => {
  return (
    <div>
      <div className="card-container">
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </div>
      <div className="card-container">
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </div>
      <Media />
    </div>
  )
}

export default Home
