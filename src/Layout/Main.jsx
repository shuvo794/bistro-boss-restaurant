
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Share/Footer/Footer'

function Main() {
  return (
    <div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main