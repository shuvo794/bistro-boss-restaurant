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
      </form>
    </div>
  );
};

export default AddItems;
