import SectionTittle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManegItem = () => {
    const [menu] = useMenu();
  return (
    <div>
      <SectionTittle
        subHeading={"Hurry Up"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTittle>
      ;
    </div>
  );
};

export default ManegItem;
