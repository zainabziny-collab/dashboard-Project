///React-Icons///////////////////////////////////////////////////////////////////////////////
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

///Hooks////////////////////////////////////////////////////////////////////////////////////
import useAxios from "../../../Hooks/useAxios";
import { useContext, useEffect } from "react";
import { ShowContext } from "../../../../Context/Context";

///forms////////////////////////////////////////////////////////////////////////////////////
import DeleteAlert from "../forms/deleteAlert/DeleteAlert";

const DashboardTable = () => {
  const {
    productId,
    setProductId,
    findProduct,

    ///forms/////////////////////////////////////////////////////////////////////////////////
    openForm,
    setOpenForm,
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,

    ///error-handleling//////////////////////////////////////////////////////////////////
    loading,
    error,
    isSubmitting,
    isUpdating,
    isDeleting,

    //////savedInputs//////////////////////////////////////////////////////////////////////
    setEditName,
    setEditPrice,
    setEditQuantity,
    setEditCategory,
    setEditStatus,
  } = useContext(ShowContext);

  //////Hooks//////////////////////////////////////////////////////////////////////
  const { dashboardProducts } = useAxios("");

  //////edit-useEffect//////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (findProduct) {
      setEditName(findProduct.name);
      setEditPrice(findProduct.price);
      setEditQuantity(findProduct.quantity);
      setEditCategory(findProduct.category);
      setEditStatus(findProduct.status);
    }
  }, [productId]);

  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-start ">
        <div className="tableStyle dark-tableStyle">
          <table cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className={` ${(loading || error) && " h-15 relative"}`}>
              {loading ? (
                <tr>
                  <td className=" absolute top-8 animate-bounce w-full h-fit text-black dark:text-white text-[1rem] ">
                    Loading...
                  </td>
                </tr>
              ) : (
                dashboardProducts.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.quantity}</td>
                    <td>{item.status}</td>
                    <td className=" space-x-3 md:space-x-5 w-17 sm:w-20 md:w-25 lg:w-45 lg:md:space-x-3 ">
                      <button
                        className="size-fit lg:w-18 lg:h-9 lg:bg-red-500 rounded-md text-white lg:hover:bg-red-600 active:scale-90 duration-200 transition-all cursor-pointer"
                        onClick={() => {
                          setProductId(item.id);
                          setOpenDelete(!openDelete);
                        }}
                      >
                        <span className="hidden lg:block">
                          {isDeleting === item.id ? "Deleting..." : "Delete"}
                        </span>
                        <FaDeleteLeft className=" lg:hidden text-xl md:text-2xl text-red-500 " />
                      </button>
                      <button
                        className="size-fit lg:w-18 lg:h-9 lg:bg-green-500 rounded-md text-white lg:hover:bg-green-600 active:scale-90 duration-200 transition-all cursor-pointer"
                        onClick={() => {
                          setProductId(item.id);
                          setOpenEdit(!openEdit);
                        }}
                      >
                        <span className="hidden lg:block">
                          {isUpdating === item.id ? "Editing..." : "Edit"}
                        </span>
                        <FaEdit className=" lg:hidden text-xl md:text-2xl text-green-500" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
              {error && (
                <div className="absolute top-8 w-full h-fit text-red-500 text-[1rem]">
                  {error}
                </div>
              )}
            </tbody>
          </table>
        </div>
        <button
          className=" md:py-2.5 md:px-5 md:text-[1rem] py-2 px-3 text-[14px] rounded-md cursor-pointer active:shadow-[0_0_10px_5px_white] dark:active:shadow-none bg-[#ff6a00] text-white active:scale-95 hover:bg-[#ff5500] duration-200 transition-all"
          onClick={() => {
            setOpenForm(!openForm);
          }}
        >
          {isSubmitting ? "Adding..." : "Add Product"}
        </button>
      </div>
      {openDelete && <DeleteAlert />}
    </>
  );
};

export default DashboardTable;
