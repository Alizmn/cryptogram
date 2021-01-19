import React from 'react';
import {Pie} from 'react-chartjs-2';
import './visualStyle/PieChart.scss';

const state = {
  labels: ['Market Cap', 'Transparent'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        // '#2FDE00',
        // '#00A6B4',
        // '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      // '#175000',
      // '#003350',
      // '#35014F'
      ],
      data: [65, 59]
    }
  ]
}






export default function PieChart(props) {
  return (
    <div className='pieChart'>
      <Pie
        data={state}
        // width={'1%'}
        // height={0.5}
        options={{
          title:{
            display:false,
            text:'Average Rainfall per month',
            fontSize:20
          },
          legend:{
            display:true,
            position:'top'
          },
          maintainAspectRatio: false 
        }}
        />
        </div>
  );
}