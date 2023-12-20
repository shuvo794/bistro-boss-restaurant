import  {  useEffect, useState } from 'react'
import SectionTittle from '../../../Components/SectionTittle/SectionTittle'
import MenuItems from '../../Share/MenuItem/menuItems';
import useMenu from '../../Hooks/useMenu';

function PopulerMenu() {

  const [menu]=useMenu();
  const populer =menu.filter(item=>item.category === 'popular');

   

   
  return (
    <section className="mb-12">
       <SectionTittle
       subHeading={"Check it out"}
       heading={"FROM OUR MENU"}
       >

       </SectionTittle>
       <div className="grid md:grid-cols-2 gap-10">
        {
            populer.map(item=> <MenuItems
            key={item._id}
            item={item}
            
            ></MenuItems>)
            

        }
    </div>
       <br />
       <div className='text-center'>
       <button className="btn  btn-outline border-0 border-h border-b-4 mt-4">View Full  Menu</button>
       </div>
    </section>
  )
}

export default PopulerMenu