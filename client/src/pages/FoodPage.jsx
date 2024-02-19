import React, { useEffect, useState } from 'react'
import axios from "axios"
const FoodPage = () => {
    const [foods, setFoods] = useState([]);
    const getFoods = async () => {
        try {
            const res = await axios.get('http://localhost:8000/food')
            setFoods(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getFoods();
    })
    return (
        <div>
            {
                foods.map((food) => {
                    return <div className='container'>
                        <img src={food.image} height={300} width={300} />
                        <p> <span className='title'> Foods Available </span> {food.foods}</p>
                        <p>{food.description}</p>
                        <p>{food.location}</p>
                        <p>{food.distributor}</p>
                    </div>
                })
            }
        </div>
    )
}

export default FoodPage
