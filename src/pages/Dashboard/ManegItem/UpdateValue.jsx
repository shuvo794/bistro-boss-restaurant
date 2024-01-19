import { useForm } from "react-hook-form";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { useLoaderData } from "react-router-dom";

const UpdateValue = () => {
  // Todo this page 
  const loadedUser = useLoaderData();
  console.log(loadedUser);

  const [menu, , refetch] = useMenu();

  
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgUrl,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item Add a SuccessFully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">
        UPDATE ITEM 
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full my-4">
          <div className="label">
            <span className="label-text">Recipe name*</span>
          </div>
          <input
            type="text"
            placeholder="Recipe name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </label>
        <div className="flex my-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              defaultValue="Category"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Category</option>
              <option>Pizza</option>
              <option>Salad</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Desi</option>
              <option>Drinks</option>
            </select>
          </label>
          <label className="form-control w-full ml-4 ">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <label className="form-control my-4">
          <div className="label">
            <span className="label-text">Recipe Details*</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
        </label>
        {/* <label className="form-control w-full max-w-xs my-4">
            <div className="label">
              <span className="label-text">Items Image*</span>
            </div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </label> */}

        <button className="btn btn-sm text-center justify-center	items-center bg-[red] my-4">
          {/* <FaUtensils className="mr-1" />{" "} */}
          <input type="submit" value="UPDATE ITEM" />
        </button>
      </form>
    </div>
  );
};

export default UpdateValue;
