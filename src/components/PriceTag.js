import React from 'react';
import Paper from '@material-ui/core/Paper';
import "./visualStyle/PriceTag.scss";



export default function PriceTag({imageUrl, cryptoName, cryptoPrice, fiat}) {

  return (
    <div className="priceTag">
      <Paper elevation={3}>
        <div className='priceTag_image'>
          <img width={'50px'} height={'50px'} src={imageUrl} alt={cryptoName}/>
          <h1>{cryptoName}</h1>
        </div>
        <h4 className='priceTag_price'>{cryptoPrice} {fiat}</h4>
      </Paper>
    </div>
  );
}