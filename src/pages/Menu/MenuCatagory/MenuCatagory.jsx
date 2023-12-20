import React from 'react'
import MenuItems from '../../Share/MenuItem/menuItems'
import Cover from '../../Share/Cover/Cover'

function MenuCatagory({items,title,img}) {
  return (
  <div className='pt-8 '> 
    {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        
        {
            items.map(item=> <MenuItems
            key={item._id}
            item={item}
            
            ></MenuItems>)
            

        }
    </div>
  </div>
  )
}

export default MenuCatagory