import React from 'react'

function FoodCard({item}) {

    const {name,image,recipe,price}=item;
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default FoodCard