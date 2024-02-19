import React, { useEffect, useState } from 'react'
import { useSearchParams , useParams } from 'react-router-dom'
import axios from'axios'

const FoodItem = () => {
  const params = useParams();
  console.log(params.id);

  const [food , setFood] = useState()
  const getFood = async () => {
    try {
      const res = await axios.get('http://localhost:8000/food/'+params.id)
      setFood(res.data)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=> {
    getFood()
  })
  return (
    <div>
      <h1>{food?.description}</h1>
    </div>
  )
}

export default FoodItem
