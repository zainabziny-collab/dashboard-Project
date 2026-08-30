import { createContext, useState, useEffect } from "react";
import useShow from "../Components/Hooks/useShow";
export const ShowContext = createContext();
export const Context = ({ children }) => {
  //////Theme////////////////////////////////////////////////////////////////////////////
  const [products, setProducts] = useState([]);
  const [themeBtn, setThemeBtn] = useState(false);
  const [dark, setDark] = useState(false);
  const [productId, setProductId] = useState("");

  //////Filter-Inputs/////////////////////////////////////////////////////////////////////
  const [searchInput, setSearchInput] = useState("");
  const [DSearchInput, setDSearchInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("all");
  const [priceInput, setPriceInput] = useState("all");

  //////Error-Handleing///////////////////////////////////////////////////////////////////
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(null);
  const [isUpdating, setIsUpdating] = useState(null);

  //////addInputs//////////////////////////////////////////////////////////////////////////
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  //////editInputs//////////////////////////////////////////////////////////////////////////
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editQuantity, setEditQuantity] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editStatus, setEditStatus] = useState("");

  ///dark-&-light-Mood//////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setThemeBtn(true);
    }
  }, []);

  useEffect(() => {
    if (themeBtn) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    }
  }, [themeBtn]);

  //////UseShow/////////////////////////////////////////////////////////////////////////////
  const {
    openForm,
    setOpenForm,
    openDelete,
    setOpenDelete,
    openEdit,
    setOpenEdit,
    openMenu,
    setOpenMenu,
  } = useShow();

  //////filter//////////////////////////////////////////////////////////////////////////////
  const filterProducts = products.filter((product) => {
    const searchProducts = product.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const searchCategory =
      categoryInput === "all" || product.category === categoryInput;

    const [min, max] = priceInput.split("-").map(Number);
    const searchPrice =
      priceInput === "all" || (product.price >= min && product.price <= max);

    return searchProducts && searchCategory && searchPrice;
  });

  //////dashboard-filter///////////////////////////////////////////////////////////////////////
  const dashboardProducts = products.filter((item) =>
    item.name.toLowerCase().includes(DSearchInput.toLowerCase()),
  );

  //////find-Id////////////////////////////////////////////////////////////////////////////
  const findProduct = products.find((item) => item.id === productId);

  ////quantity-box//////////////////////
  const productQuantity = products
    .map((item) => parseInt(item.quantity))
    .reduce((sum, num) => sum + num, 0);

  ////outOfStock-box//////////////////////
  const outOfStock = products.filter((item) => item.quantity === "0");

  ////active-box//////////////////////
  const active = products.filter((item) => item.status === "active");

  return (
    <ShowContext.Provider
      value={{
        //////addInputs///////////////////////////////////////////////////////////////////////////////
        name,
        setName,
        price,
        setPrice,
        quantity,
        setQuantity,
        category,
        setCategory,
        status,
        setStatus,

        //////editInputs//////////////////////////////////////////////////////////////////////////////
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

        //////Filter-Inputs///////////////////////////////////////////////////////////////////////////
        searchInput,
        setSearchInput,
        DSearchInput,
        setDSearchInput,
        categoryInput,
        setCategoryInput,
        priceInput,
        setPriceInput,

        //////UseShow/////////////////////////////////////////////////////////////////////////////////
        openForm,
        setOpenForm,
        openDelete,
        setOpenDelete,
        openEdit,
        setOpenEdit,
        openMenu,
        setOpenMenu,

        //////error-handleing/////////////////////////////////////////////////////////////////////////
        loading,
        setLoading,
        error,
        setError,
        isSubmitting,
        setIsSubmitting,
        isDeleting,
        setIsDeleting,
        isUpdating,
        setIsUpdating,

        //////Boxes//////////////////////////////////////////////////////////////////////////////////////
        productQuantity,
        outOfStock,
        active,

        //////Theme/////////////////////////////////////////////////////////////////////////////////////
        themeBtn,
        setThemeBtn,
        dark,
        setDark,

        //////Filter/////////////////////////////////////////////////////////////////////////////////////
        filterProducts,
        dashboardProducts,

        //////products///////////////////////////////////////////////////////////////////////////////////
        productId,
        setProductId,
        products,
        setProducts,
        findProduct,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};

export default Context;
