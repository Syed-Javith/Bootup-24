import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom';
const FoodPage = () => {
    const [foods, setFoods] = useState([]);
    const [user, setUser] = useState(null)
    const cookies = new Cookies();
    const getFoods = async () => {
        try {
            const res = await axios.get('http://localhost:8000/food')
            setFoods(res.data)
        } catch (error) {
            // console.log(error);
        }
    }
    useEffect(() => {
        const userCookie = cookies.get('user')
        if (userCookie) setUser(userCookie)
        console.log(user);
        getFoods();
    }, [])
    return (
        <div>
            {
                user?.username
            }
            <Link to={'/profile'}>
            <div>
                <img src="/user.png" alt="user icon" style={{ display: 'inline-block' }} height={50} width={50} />
            </div>
            </Link>
            {

                user?.role === 'D' && <>
                    <button>Post food availability</button>
                    <button>View request</button>
                </>
            }

            <div className='food-cont'>
                {foods.map((food) => {
                    return <Link to={`/foods/${food._id}`}>
                        <div className='container'>
                            <img src={food.image} height={300} width={300} />
                            <p> <span className='title'> Foods Available </span> {food.foods}</p>
                            <p>{food.description}</p>
                            <p>{food.location}</p>
                            <p>{food.distributor}</p>
                        </div>
                    </Link>
                })
                }
            </div>

        </div>
    )
}

export default FoodPage
