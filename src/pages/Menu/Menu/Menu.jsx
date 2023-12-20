import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Share/Cover/Cover';
import menuCover from '../../../assets/menu/banner3.jpg'
import useMenu from '../../Hooks/useMenu';


function Menu() {
    const [menu]=useMenu();
    const dessert =menu.filter(item=>item.category === 'dessert');
    const pizza =menu.filter(item=>item.category === 'pizza');
    const salad =menu.filter(item=>item.category === 'salad');
    const soup =menu.filter(item=>item.category === 'soup');
  return (
    <div>
     <Helmet>
        <title>Bistro Boss/Menu</title>
        
      </Helmet>
      <Cover img={menuCover} title="OUR MENU"></Cover>
      
     
        
        </div> 
  )
}

export default Menu