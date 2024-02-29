import React from 'react'
import { useParams } from 'react-router-dom'
import arry from '../Array/Arry'
import './Card.css'
const Card = () => {
    var{id}=useParams()

    var data = arry.filter((data)=>{
        return Number(data.id) === Number(id)
    })[0]
  return (
    <div className='play-movies'>
      <video src={data.video} controls />
    </div>
  )
}

export default Card
