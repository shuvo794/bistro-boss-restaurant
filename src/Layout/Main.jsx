
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Share/Footer/Footer'
import Navbar from '../pages/Share/Navbar/Navbar'


function Main() {
  return (
    <div>
      <Navbar></Navbar>
       <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main