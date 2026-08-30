import axios from "axios";
import { useEffect, useContext } from "react";
import { ShowContext } from "../../Context/Context";

const useAxios = () => {
  const {
    productId,
    setProducts,
    products,
    filterProducts,
    dashboardProducts,

    ///error-handleling///////////////////////////////////////////////////////////////////////
    setLoading,
    setError,
    setIsSubmitting,
    setIsDeleting,
    setIsUpdating,

    ///add-Product-Inputs//////////////////////////////////////////////////////////////////////
    name,
    price,
    quantity,
    category,
    status,

    ///edit-Product-Inputs////////////////////////////////////////////////////////////////////
    editName,
    editPrice,
    editQuantity,
    editCategory,
    editStatus,
  } = useContext(ShowContext);

  ///edit-object/////////////////////////////////////////////////////////////////////////////
  const editProduct = {
    name: editName,
    price: editPrice,
    quantity: editQuantity,
    category: editCategory,
    status: editStatus,
  };

  ///getdata/////////////////////////////////////////////////////////////////////////////////
  const getdata = async () => {
    try {
      setLoading(true);
      setError(null);
      await axios.get("http://localhost:3006/products").then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.error(error);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  ///handleSubmit///////////////////////////////////////////////////////////////////////////
  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      await axios.post("http://localhost:3006/products", {
        name,
        price,
        quantity,
        category,
        status,
      });
      await getdata();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////
  const handleEdit = async () => {
    try {
      setIsUpdating(productId);
      await axios.patch(
        `http://localhost:3006/products/${productId} `,
        editProduct,
      );
      await getdata();
    } catch (error) {
      console.error(error);
    } finally {
      setIsUpdating(null);
    }
  };

  ////handleDelete////////////////////////////////////////////////////////////////////////////
  const handleDelete = async () => {
    try {
      setIsDeleting(productId);
      await axios.delete(`http://localhost:3006/products/${productId}`);
      await getdata();
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(null);
    }
  };

  return {
    ///filter/////////////////////////////////////////////////////////////////////////////////
    products,
    filterProducts,
    dashboardProducts,

    ///////functions//////////////////////////////////////////////////////////////////////////
    handleSubmit,
    handleEdit,
    handleDelete,
  };
};

export default useAxios;
