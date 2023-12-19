import Banner from "../Banner/Banner"
import BistroSection from "../BistroSection/BistroSection"
import CallUs from "../CallUs/CallUs"
import Catagory from "../Catagory/Catagory"
import FetureItems from "../FetureItems/FetureItems"
import PopulerMenu from "../PopulerMenu/PopulerMenu"
import Reviwe from "../Reviwe/Reviwe"


function Home() {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <BistroSection></BistroSection>
      <PopulerMenu></PopulerMenu>
      <CallUs></CallUs>
      <FetureItems></FetureItems>
      <Reviwe></Reviwe>
    </div>
  )
}

export default Home