import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import prof5 from "../src/profpic/prof5.png"

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
    src={prof5}
  />
  <CardBody>
    <CardTitle tag="h5">
      Darling
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Designation
    </CardSubtitle>
    <CardText>
     Secratary
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
