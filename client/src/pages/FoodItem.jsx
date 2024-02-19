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
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const generateCode = async () => {
    const code = "abcdef";
    try {
      const res = await axios.post('http://localhost:8000/food/code/'+params.id,{ code })
    } catch (error) {
      console.log(error);
    }

  }
  const received = async () => {
    try {
      const res = await axios.post('http://localhost:8000/food/receive/'+params.id,{ code : "abcdef" })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=> {
    getFood()
  },[])
  return (
    <div>
      <img src={food?.image} />
      <h4>Details</h4>
      {
        // food.foods.split(',').map((f)=> {
        //   <li>{f.split(' ')[0] - f.split(' ')[1]}</li>
        // })
        food?.foods.split(",").map((f) => {
          return <li> {f}</li>
        })
      }
      {
        food?.isDeleivered && <p>yes</p>
      }
      <p>{food?.description}</p>
      <button onClick={generateCode} >Generate code</button>
      <form  onSubmit={(e) => { e.preventDefault(); received(); }}>
        <input type="text" name='code'/>
        <input type='submit' value={'ok'} />
      </form>
    </div>
  )
}

export default FoodItem
