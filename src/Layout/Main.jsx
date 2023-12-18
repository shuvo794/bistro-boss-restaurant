
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Share/Footer/Footer'
import Navbar from '../pages/Share/Navbar/Navbar'
import Banner from '../pages/Home/Banner/Banner'

function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main