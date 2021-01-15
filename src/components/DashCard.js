import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// import "./DashCard.scss"

export default function CardDash(props) {
  return (
    <Card>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button className="1Week">Last Week</Button>
        <Button className="1Month">Last Month</Button>
        <Button className="1Year">Last Year</Button>
        <Button className="Max">Max</Button>
      </ButtonGroup>
      <CardContent>
        {props.children}
      </CardContent>
      <CardActions disableSpacing>
        <FontAwesomeIcon icon={["fas", "info-circle"]} size="lg"/>
      </CardActions>
    </Card>
  );
}
