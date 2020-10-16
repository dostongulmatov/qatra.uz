import React from 'react'
import { Card } from 'react-bootstrap';
import Masjid1 from "./images/Masjid1.jpg"

const Card1 = () => {
  return (
    <div>
      <div>
        <Card className="card">
          <Card.Body>
            <Card.Img variant="top" src={Masjid1} />
            <Card.Title>Demo Masjid</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Donate to make the Masjid more Beautiful</Card.Subtitle>
            <Card.Text>
              It is a Masjid in Angren(demo). You can make charity from your home.
            </Card.Text>
            <Card.Link href="/moreInfo">More info</Card.Link>
            <Card.Link href="/PaymentPage">Donate</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Card1
