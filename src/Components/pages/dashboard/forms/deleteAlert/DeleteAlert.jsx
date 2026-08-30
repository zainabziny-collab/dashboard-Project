import useAxios from "../../../../Hooks/useAxios";
///Context////////////////////////////////////////////////////////////////////////////////////
import { useContext } from "react";
import { ShowContext } from "../../../../../Context/Context";

function DeleteAlert({ id }) {
  const { openDelete, setOpenDelete, setProductId } = useContext(ShowContext);
  const { handleDelete } = useAxios("");
  return (
    <div className="w-full h-full fixed inset-0 z-50 backdrop-blur-[7px] flex items-center justify-center">
      <div className="w-95 h-45 effect darkEffect rounded-xl flex flex-col items-center justify-center gap-5 ">
        <h2 className="font-semibold text-[1.1rem]">
          Are you sure to delete this product?
        </h2>
        <div className="space-x-4">
          <button
            className=" effect btn-effect px-7 py-1.5 rounded-md cursor-pointer active:shadow-[0_0_10px_5px_white] text-red-500 active:scale-95 duration-200 transition-all "
            onClick={() => {
              handleDelete();
              setProductId("");
              setOpenDelete(!openDelete);
            }}
          >
            Yes
          </button>
          <button
            className=" effect btn-effect px-7 py-1.5 rounded-md cursor-pointer active:shadow-[0_0_10px_5px_white] text-green-500 active:scale-95 duration-200 transition-all "
            onClick={() => {
              setOpenDelete(!openDelete);
              setProductId("");
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAlert;
