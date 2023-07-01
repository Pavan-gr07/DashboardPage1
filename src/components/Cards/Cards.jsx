import React from 'react'
import './Cards.css'
import {CardsData} from '../../Data/data.js'
import Card from '../Card/Card'

const Cards = () => {
  return (
    <div className='CardsContainer'>
      {CardsData.map((item,index) =>{
        return(
        <div className="parentCardContainer" key={index}>
            <Card
                title={item.title}
                color={item.color}
                barvalue={item.barValue}
                value={item.value}
                png={item.png}
                series={item.series}
            />
            
        </div>
     )})}
    </div>
  )
}

export default Cards
