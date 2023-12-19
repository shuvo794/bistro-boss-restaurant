import SectionTittle from "../../../Components/SectionTittle/SectionTittle"
import featured from '../../../assets/home/featured.jpg'
import  './FetureItems.css'

function FetureItems() {
  return (
    <div className="Feture-items bg-fixed text-white pt-5 my-20">
        <div className="bg-slate-400 bg-opacity-50">
        <SectionTittle
             heading={"FROM OUR MENU"}
             subHeading={"Check it out"}
            
             ></SectionTittle>

             <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
                <div>
                     <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Dec 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-h border-b-4 mt-4">Read More</button>
                </div>
             </div>
        </div>
             
    </div>
  )
}

export default FetureItems