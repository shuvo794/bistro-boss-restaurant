import  {  useEffect, useState } from 'react'
import SectionTittle from '../../../Components/SectionTittle/SectionTittle'
import MenuItems from '../../Share/MenuItem/menuItems';
// import SectionTittle from '../../../Components/SectionTittle';
function PopulerMenu() {
    const [menu,setMenu]=useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const populerItems=data.filter(item=>item.category === 'popular');
            setMenu(populerItems)})
    },[])
  return (
    <section className="mb-12">
       <SectionTittle
       subHeading={"Check it out"}
       heading={"FROM OUR MENU"}
       >

       </SectionTittle>
       <div className="grid md:grid-cols-2 gap-10">
        {
            menu.map(item=> <MenuItems
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