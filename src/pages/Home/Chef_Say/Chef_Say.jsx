import SectionTittle from "../../../components/SectionTitle/SectionTitle";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";

const Chef_Say = () => {
  return (
    <div>
      <SectionTittle
        subHeading={"Should Try"}
        heading={"RECOMMENDS"}
      ></SectionTittle>

      <div className="grid md:grid-cols-3 gap-5 p-2 ">
        <div className="card w-86 glass">
          <img
            style={{ width: "424px", height: "300px" }}
            src={slide2}
            alt="car!"
          />
          <div className="card-body ">
            <h2 className="card-title ">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center -mb-3">
              <button className="btn  uppercase">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card w-86 glass">
          <img
            style={{ width: "424px", height: "300px" }}
            src={slide3}
            alt="car!"
          />
          <div className="card-body ">
            <h2 className="card-title ">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center -mb-3">
              <button className="btn  uppercase">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card w-86 glass">
          <img
            style={{ width: "424px", height: "300px" }}
            src={slide1}
            alt="car!"
          />
          <div className="card-body ">
            <h2 className="card-title ">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center -mb-3">
              <button className="btn  uppercase">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef_Say;
