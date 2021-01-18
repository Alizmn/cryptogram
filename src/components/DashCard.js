import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import './visualStyle/DashCard.scss';

export default function DashCard(props) {
  return (
    <div className='Card'>
      <Card raised>
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
        {props.info && <div className='Card_info'>
          <FontAwesomeIcon onClick={props.info} icon={["fas", "info-circle"]} size="lg"/>
        </div>}
      </Card>
    </div>
  );
}
