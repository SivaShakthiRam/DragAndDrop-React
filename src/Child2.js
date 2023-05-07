import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import prof2 from "../src/profpic/prof2.jpg"

const Child2 = () => {
  return (
    <div>
      <Card
  style={{
    width: '18rem'
  }}
>
  <img style={{"height":"250px"}}
    alt="Sample"
    src={prof2}
  />
  <CardBody>
    <CardTitle tag="h5">
      Mary
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Designation
    </CardSubtitle>
    <CardText>
      Quality supervisor
    </CardText>
    <Button>
    View
    </Button>
  </CardBody>
</Card>
    </div>
  )
}

export default Child2
