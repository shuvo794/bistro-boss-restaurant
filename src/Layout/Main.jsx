
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/Share/Footer/Footer'
import Navbar from '../pages/Share/Navbar/Navbar'


function Main() {
  const location =useLocation()
  const noHeaderFoter=location.pathname.includes('login')

  return (

    <div>
      {noHeaderFoter ||  <Navbar></Navbar>}
       <Outlet></Outlet>
        {noHeaderFoter || <Footer></Footer>}
    </div>
  )
}

export default Main