import SectionTitle from "../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"What's new?"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>
      <form>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Recipe name*</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category*</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>
              Category
            </option>
            <option>Pizza</option>
            <option>Salad</option>
            <option>Soup</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Price*</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </form>
    </div>
  );
};

export default AddItems;
