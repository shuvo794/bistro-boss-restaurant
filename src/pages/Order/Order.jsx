import { Helmet } from "react-helmet-async"
import Cover from "../Share/Cover/Cover"
import shop from '../../assets/shop/banner2.jpg'

function Order() {
  return (
    <div>
        <Helmet>
        <title>Bistro Boss/Our Shop</title>
    </Helmet>
    <Cover img={shop}
    title="OUR SHOP"
    ></Cover>
    </div>
  )
}

export default Order