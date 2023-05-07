import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import prof8 from "../src/profpic/prof8.jpg"

const Child3 = () => {
  return (
    <div>
      <Card
  style={{
    width: '18rem'
  }}
>
  <img style={{"height":"250px"}}
    alt="Sample"
    src={prof8}
  />
  <CardBody>
    <CardTitle tag="h5">
     Megha
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Office administrative
    </CardSubtitle>
    <CardText>
     CEO
    </CardText>
    <Button>
    View
    </Button>
  </CardBody>
</Card>
    </div>
  )
}

export default Child3
