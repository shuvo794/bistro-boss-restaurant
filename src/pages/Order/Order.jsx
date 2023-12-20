import { Helmet } from "react-helmet-async"
import Cover from "../Share/Cover/Cover"
import shop from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import OrderTab from "./OrderTab/OrderTab";

function Order() {
    const [tabIndex,setTabIndex]=useState(0);
    const [menu]=useMenu();
    const dessert =menu.filter(item=>item.category === 'dessert');
    const pizza =menu.filter(item=>item.category === 'pizza');
    const salad =menu.filter(item=>item.category === 'salad');
    const soup =menu.filter(item=>item.category === 'soup');
    const offered =menu.filter(item=>item.category === 'offered');
  return (
    <div>
        <Helmet>
        <title>Bistro Boss/Our Shop</title>
    </Helmet>
    <Cover img={shop}title="OUR SHOP"></Cover>

    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soups</Tab>
    <Tab>Desserts</Tab>
  </TabList>
  <TabPanel>
   <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel></TabPanel>
</Tabs>


    </div>
  )
}

export default Order