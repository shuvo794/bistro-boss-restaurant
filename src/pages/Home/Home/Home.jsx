import Banner from "../Banner/Banner"
import BistroSection from "../BistroSection/BistroSection"
import Catagory from "../Catagory/Catagory"
import FetureItems from "../FetureItems/FetureItems"
import PopulerMenu from "../PopulerMenu/PopulerMenu"


function Home() {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <BistroSection></BistroSection>
      <PopulerMenu></PopulerMenu>
      <FetureItems></FetureItems>
    </div>
  )
}

export default Home