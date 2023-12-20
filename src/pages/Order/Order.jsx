import { Helmet } from "react-helmet-async"
import Cover from "../Share/Cover/Cover"
import shop from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Order() {
  return (
    <div>
        <Helmet>
        <title>Bistro Boss/Our Shop</title>
    </Helmet>
    <Cover img={shop}title="OUR SHOP"></Cover>

    <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
  <TabList>
    <Tab>Title 1</Tab>
    <Tab>Title 2</Tab>
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>


    </div>
  )
}

export default Order