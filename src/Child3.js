import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import prof3 from "../src/profpic/prof3.jpg"

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
    src={prof3}
  />
  <CardBody>
    <CardTitle tag="h5">
      Raju
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Designation
    </CardSubtitle>
    <CardText>
     Production controller
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
