import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Share/Cover/Cover';
import menuCover from '../../../assets/menu/banner3.jpg'
import PopulerMenu from '../../Home/PopulerMenu/PopulerMenu';

function Menu() {
  return (
    <div>
     <Helmet>
        <title>Bistro Boss/Menu</title>
        
      </Helmet>
      <Cover img={menuCover} title="OUR MENU"></Cover>
      <PopulerMenu></PopulerMenu>
      <Cover img={menuCover} title="OUR MENU"></Cover>
      <PopulerMenu></PopulerMenu>
      <Cover img={menuCover} title="OUR MENU"></Cover>
      <PopulerMenu></PopulerMenu>
      <Cover img={menuCover} title="OUR MENU"></Cover>
      <PopulerMenu></PopulerMenu>

     
        
        </div> 
  )
}

export default Menu