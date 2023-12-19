import SectionTittle from "../../../Components/SectionTittle/SectionTittle"
import featured from '../../../assets/home/featured.jpg'

function FetureItems() {
  return (
    <div>
             <SectionTittle
             heading={"FROM OUR MENU"}
             subHeading={"Check it out"}
             ></SectionTittle>

             <div className="md:flex justify-center items-center py-8 px-16">
                <div>
                     <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Dec 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                </div>
             </div>
    </div>
  )
}

export default FetureItems