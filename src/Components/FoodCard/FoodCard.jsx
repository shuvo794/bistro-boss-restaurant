import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';

function FoodCard({item}) {

  const { name, image, recipe, price } = item;
  const { user } = useContext(AuthContext);

  const handelAddTocurt = item => {
    console.log(item);
    if (user) {
      fetch('http://localhost:5000/carts')
      .then(res=>res.json())
    }
  }
  
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handelAddTocurt(item)} className="btn btn-outline border-0 border-h bg-slate-100 border-orange-400 border-b-4 mt-4">Add To Cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default FoodCard