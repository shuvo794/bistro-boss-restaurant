import React from 'react'
import { Helmet } from 'react-helmet-async';
import usecarts from '../../Hooks/usecarts';
import SectionTittle from '../../../Components/SectionTittle/SectionTittle';

function MyCart() {
  const [cart] = usecarts()
  const total =cart.reduce((sum,item)=>item.price+sum,0)
  return (
    <section>
      <Helmet>
        <title>Bistro Boss/myCart</title>
      </Helmet>

      {/* <SectionTittle
        subHeading={"My Cart"}
        heading={"WANNA ADD MORE?"}
      ></SectionTittle> */}
      <h2 className='text-3xl'>Total Orders: {cart.length}</h2>
      <h2 className='text-3xl'>Total Price: ${total}</h2>
    </section>
  );
}

export default MyCart