import useAxios from "../../../../Hooks/useAxios";

///Context////////////////////////////////////////////////////////////////
import { useContext } from "react";
import { ShowContext } from "../../../../../Context/Context";
function AddForm() {
  const {
    ///Forms////////////////////////////////////////////////////////////////
    openForm,
    setOpenForm,

    ///Input-States//////////////////////////////////////////////////////////
    setName,
    setPrice,
    setQuantity,
    setCategory,
    setStatus,
  } = useContext(ShowContext);

  ///Hooks////////////////////////////////////////////////////////////////
  const { handleSubmit } = useAxios("");

  return (
    <div className="w-full h-full fixed inset-0 z-50 backdrop-blur-[7px] flex items-center justify-center">
      <div className="w-110 h-120 bg-[#e0e4e7] dark:bg-[#141414] shadow-[0_0_10px_black]/50 flex flex-col items-center justify-start gap-5 p-7 pt-8 rounded-xl  ">
        <h1 className="text-2xl text-[#ff6a00] font-bold ">Add New Product</h1>
        <form
          action=""
          className="w-full flex gap-5 flex-col items-center justify-center "
        >
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="effect darkEffect rounded-md w-full py-2 px-3 focus "
          >
            <option value="all">All Categories</option>
            <option value="clothe">Clothes</option>
            <option value="beauty">Luxury Beauties</option>
            <option value="furnitur">House Furnitures</option>
            <option value="sport">Sports Gear</option>
          </select>

          <input
            type="text"
            placeholder="Name"
            className="effect darkEffect rounded-md w-full py-2 px-3 focus "
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Price"
            className="effect darkEffect rounded-md w-full py-2 px-3 focus outline-none"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="effect darkEffect rounded-md w-full py-2 px-3 focus outline-none"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />

          <div className="flex w-full h-fit justify-between items-center py-2 px-3 effect darkEffect rounded-md focus outline-none">
            <h3 className="text-black/60 dark:text-white">Status: </h3>
            <div className="flex gap-2 ">
              <input
                type="radio"
                name="selector"
                id="option-1"
                className="effect rounded-full darkEffect "
                onClick={() => {
                  setStatus("active");
                }}
              />
              <label htmlFor="option-1">Active</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="selector"
                id="option-2"
                className="effect rounded-full darkEffect"
                onClick={() => {
                  setStatus("inactive");
                }}
              />
              <label htmlFor="option-2">Inactive</label>
            </div>
          </div>
        </form>

        <div className="flex gap-5">
          <button
            className=" md:py-2.5 md:px-5 md:text-[1rem] py-2 px-3 text-[14px] rounded-md cursor-pointer active:shadow-[0_0_10px_5px_white] dark:active:shadow-none bg-[#ff5500] text-white active:scale-95 duration-200 transition-all"
            onClick={() => {
              handleSubmit();
              setOpenForm(!openForm);
            }}
          >
            Add Product
          </button>
          <button
            className=" md:py-2.5 md:px-5 md:text-[1rem] py-2 px-3 text-[14px] rounded-md cursor-pointer active:shadow-[0_0_10px_5px_white] dark:active:shadow-none bg-green-600 text-white active:scale-95 duration-200 transition-all"
            onClick={() => {
              setOpenForm(!openForm);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
