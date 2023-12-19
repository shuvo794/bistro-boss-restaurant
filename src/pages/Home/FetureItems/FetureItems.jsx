import SectionTittle from "../../../Components/SectionTittle/SectionTittle"
import featured from '../../../assets/home/featured.jpg'

function FetureItems() {
  return (
    <div>
             <SectionTittle
             heading={"FROM OUR MENU"}
             subHeading={"Check it out"}
             ></SectionTittle>

             <div>
                <div>
                     <img src={featured} alt="" />
                </div>
             </div>
    </div>
  )
}

export default FetureItems