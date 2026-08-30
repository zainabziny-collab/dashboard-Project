import useAxios from "../../../../Hooks/useAxios";
//////Context/////////////////////////////////////////////////////////////////
import { useContext } from "react";
import { ShowContext } from "../../../../../Context/Context";
function EditForm() {
  const {
    setProductId,
    //////Form/////////////////////////////////////////////////////////////////
    openEdit,
    setOpenEdit,
    //////edit-Inputs///////////////////////////////////////////////////////////
    editName,
    setEditName,
    editPrice,
    setEditPrice,
    editQuantity,
    setEditQuantity,
    editCategory,
    setEditCategory,
    editStatus,
    setEditStatus,
  } = useContext(ShowContext);
  const { handleEdit } = useAxios("");

  return (
    <div className="w-full h-full fixed inset-0 z-5 backdrop-blur-[7px] flex items-center justify-center">
      <div className="w-110 h-120 bg-[#e0e4e7] dark:bg-[#141414] shadow-[0_0_10px_black]/50 flex flex-col items-center justify-start gap-5 p-7 pt-8 rounded-xl  ">
        <h1 className="text-2xl text-[#ff6a00] font-bold  ">Edit Product</h1>
        <form className="w-full flex gap-5 flex-col items-center justify-center ">
          <select
            className="effect darkEffect rounded-md w-full py-2 px-3 focus "
            value={editCategory}
            onChange={(e) => {
              setEditCategory(e.target.value);
            }}
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
            value={editName}
            onChange={(e) => {
              setEditName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Price"
            className="effect darkEffect rounded-md w-full py-2 px-3 focus outline-none"
            value={editPrice}
            onChange={(e) => {
              setEditPrice(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="effect darkEffect rounded-md w-full py-2 px-3 focus outline-none"
            value={editQuantity}
            onChange={(e) => {
              setEditQuantity(e.target.value);
            }}
          />

          <div className="flex w-full h-fit justify-between items-center py-2 px-3 effect darkEffect rounded-md focus outline-none">
            <h3 className="text-black/60 dark:text-white">Status: </h3>
            <div className="flex gap-2 items-center justify-center">
              <input
                type="radio"
                name="selector"
                className="effect rounded-full darkEffect"
                checked={editStatus === "active"}
                onChange={() => {
                  setEditStatus("active");
                }}
              />
              <label htmlFor="option-1">Active</label>
            </div>
            <div className="flex gap-2 items-center justify-center ">
              <input
                type="radio"
                name="selector"
                className="effect rounded-full darkEffect"
                checked={editStatus === "inactive"}
                onChange={() => {
                  setEditStatus("inactive");
                }}
              />
              <label htmlFor="option-1">Inactive</label>
            </div>
          </div>
        </form>

        <div className="flex gap-5">
          <button
            className=" md:py-2.5 md:px-8 md:text-[1rem] py-2 px-6 text-[14px] rounded-md cursor-pointer active:shadow-[0_0_10px_5px_white] dark:active:shadow-none bg-[#ff5500] text-white active:scale-95 duration-200 transition-all "
            onClick={() => {
              handleEdit();
              setProductId("");
              setOpenEdit(!openEdit);
            }}
          >
            Edit
          </button>
          <button
            className=" md:py-2.5 md:px-5 md:text-[1rem] py-2 px-3 text-[14px] rounded-md cursor-pointer active:shadow-[0_0_10px_5px_white] dark:active:shadow-none bg-green-600 text-white active:scale-95 duration-200 transition-all"
            onClick={() => {
              setProductId("");
              setOpenEdit(!openEdit);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
