import { Helmet } from "react-helmet-async"
import Cover from "../Share/Cover/Cover"
import shop from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../Hooks/useMenu";

import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";

function Order() {
  const categories =["salad","pizza","soup","dessert","drinks"]
  const {category}=useParams();
  const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex);
   
    console.log(category);
    const [menu]=useMenu();
    const dessert =menu.filter(item=>item.category === 'dessert');
    const pizza =menu.filter(item=>item.category === 'pizza');
    const salad =menu.filter(item=>item.category === 'salad');
    const soup =menu.filter(item=>item.category === 'soup');
    const drinks=menu.filter(item=>item.category === 'drinks');
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
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
   <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
   <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
   <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
   <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
   <OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>


    </div>
  )
}

export default Order