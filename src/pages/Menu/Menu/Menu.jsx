import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Share/Cover/Cover';
import menuCover from '../../../assets/menu/banner3.jpg'
import menuCover1 from '../../../assets/menu/dessert-bg.jpeg'
import menuCover2 from '../../../assets/menu/pizza-bg.jpg'
import menuCover3 from '../../../assets/menu/salad-bg.jpg'
import menuCover4 from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTittle from '../../../Components/SectionTittle/SectionTittle';
import MenuCatagory from '../MenuCatagory/MenuCatagory';


function Menu() {
    const [menu]=useMenu();
    const dessert =menu.filter(item=>item.category === 'dessert');
    const pizza =menu.filter(item=>item.category === 'pizza');
    const salad =menu.filter(item=>item.category === 'salad');
    const soup =menu.filter(item=>item.category === 'soup');
    const offered =menu.filter(item=>item.category === 'offered');

  return (
    <div>
     <Helmet>
        <title>Bistro Boss/Menu</title>
        
      </Helmet>
      {/* Main section */}
      <Cover img={menuCover} title="OUR MENU"></Cover>
      <SectionTittle
      subHeading="Don't miss"
      heading="TODAY'S OFFER"
      ></SectionTittle>
        {/* Offerd section */}
      <MenuCatagory items={offered}></MenuCatagory>

      {/* Desert section */}
      <MenuCatagory
      items={dessert}
      title="dessert"
      img={menuCover1}
      ></MenuCatagory>



      {/* PIZZA section */}

      <MenuCatagory
      items={pizza}
      title="pizza"
      img={menuCover2}

      ></MenuCatagory>

      {/* salad section */}

      <MenuCatagory
      items={salad}
      title="salad"
      img={menuCover3}
      ></MenuCatagory>

      {/* SOUPS section */}

      <MenuCatagory
      items={soup}
      title="soup"
      img={menuCover4}
      ></MenuCatagory>
      

     
        
        </div> 
  )
}

export default Menu