import Banner from "../Banner/Banner"
import BistroSection from "../BistroSection/BistroSection"
import Catagory from "../Catagory/Catagory"
import PopulerMenu from "../PopulerMenu/PopulerMenu"


function Home() {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <BistroSection></BistroSection>
      <PopulerMenu></PopulerMenu>
    </div>
  )
}

export default Home