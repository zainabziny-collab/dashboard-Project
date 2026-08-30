import image from "../../../assets/Pink-profile-01-12.jpg";
import useAxios from "../../Hooks/useAxios";
////Context///////////////////////////////////////////////////////////////////////////
import { useContext } from "react";
import { ShowContext } from "../../../Context/Context";

function ProductBox() {
  ////Context///////////////////////////////////////////////////////////////////////////
  const { loading, error } = useContext(ShowContext);
  ////Hooks///////////////////////////////////////////////////////////////////////////
  const { filterProducts } = useAxios("");

  return (
    <div
      className={`grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ${(loading || error) && "relative"}`}
    >
      {loading ? (
        <p className=" absolute top-8 animate-bounce w-full h-fit text-black dark:text-white text-[1.2rem] ">
          Loading...
        </p>
      ) : (
        filterProducts?.map((item, index) => (
          <div
            key={index}
            className="w-70 h-80 p-3.5 rounded-lg effect dark-box-effect hover:scale-104 transition-all duration-500"
          >
            <div className="w-full h-50  overflow-hidden rounded-md ">
              <img src={image} alt="" className="w-full " />
            </div>
            <div className="w-full flex flex-col items-center mt-2">
              <h2 className="text-2xl font-bold text-orange-400 ">
                {item.name}
              </h2>
              <p className="text-xl font-semibold">price: {item.price}</p>
            </div>
          </div>
        ))
      )}
      {error && (
        <div className="absolute top-8 w-45 h-fit text-red-500 text-[1rem]">
          {error}
        </div>
      )}
    </div>
  );
}

export default ProductBox;
