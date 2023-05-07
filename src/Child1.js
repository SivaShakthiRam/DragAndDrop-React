import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import prof1 from "../src/profpic/prof1.jpg"

const Child1 = () => {
  return (
    <div>
      <Card
  style={{
    width: '18rem'
  }}
>
  <img style={{"height":"250px"}}
    alt="Sample"
    src={prof1}
  />
  <CardBody>
    <CardTitle tag="h5">
      Ramesh Thilak
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

export default Child1
