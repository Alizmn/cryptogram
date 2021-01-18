import React from 'react';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import StockGraph from '../components/StockGraph';
import '../components/visualStyle/PaperGraph.scss'

export default function SimplePaper({width, height, week, month, year, max, info}) {
  return (
    <div className='Paper'>
      <Paper elevation={3}>
      <div className='Card_buttonGroup'>
          <ButtonGroup variant='contained' color='primary' size='small' aria-label='contained primary button group'>
            <Button onClick={week}>Last Week</Button>
            <Button onClick={month}>Last Month</Button>
            <Button onClick={year}>Last Year</Button>
            <Button onClick={max}>Max</Button>
          </ButtonGroup>
        </div>
        <StockGraph width={width} height={height}/>
        <div className='Card_info'>
          <FontAwesomeIcon onClick={info} icon={["fas", "info-circle"]} size="lg"/>
        </div>
      </Paper>
    </div>
  );
}
