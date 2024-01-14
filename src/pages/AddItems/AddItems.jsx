import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <SectionTitle
        subHeading={"What's new?"}
        heading={"ADD AN ITEM"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Recipe name*</span>
          </div>
          <input
            type="text"
            placeholder="Recipe name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category*</span>
          </div>
          <select
            {...register("category", { required: true })}
            className="select select-bordered"
          >
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
            placeholder="Price"
            {...register("price", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details*</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Items Image*</span>
          </div>
          <input
            type="file"
            {...image("recipe", { required: true })}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>
      </form>
    </div>
  );
};

export default AddItems;
