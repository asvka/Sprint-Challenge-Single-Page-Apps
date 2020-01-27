import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';

export default function CharacterCard (props) {
  return (
    <div>
      <Card>
        <CardBody>
            <CardImg src={props.image}/>
            <CardTitle>{props.name}</CardTitle>
            <CardText>{props.species}</CardText>
            <CardSubtitle>{props.gender}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}
