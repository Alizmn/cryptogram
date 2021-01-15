import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import './visualStyle/DashCard.scss';

export default function CardDash(props) {
  return (
    <div className='Card'>
      <Card>
      {props.title &&
        <div className={'Card_title'}>{props.title}</div>} 
      {props.button &&
        <div className='Card_buttonGroup'>
          <ButtonGroup variant='contained' color='primary' size='small' aria-label='contained primary button group'>
            <Button onClick={props.onWeek}>Last Week</Button>
            <Button onClick={props.onMonth}>Last Month</Button>
            <Button onClick={props.onYear}>Last Year</Button>
            <Button onClick={props.onMax}>Max</Button>
          </ButtonGroup>
        </div>}
        <CardContent>
          {props.children}
        </CardContent>
        <div className='Card_info'>
          <FontAwesomeIcon onClick={props.info} icon={["fas", "info-circle"]} size="lg"/>
        </div>
      </Card>
    </div>
  );
}
