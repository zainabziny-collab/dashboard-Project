import { useState } from "react";

function useShow(id) {
  ///Form-States///////////////////////////////////////////////////////////////////////
  const [openForm, setOpenForm] = useState(false);
  const [openDelete, setOpenDelete] = useState(id);
  const [openEdit, setOpenEdit] = useState(false);

  ///Menu-States///////////////////////////////////////////////////////////////////////
  const [openMenu, setOpenMenu] = useState(true);

  return {
    ///Form-States///////////////////////////////////////////////////////////////////////
    openForm,
    setOpenForm,
    openDelete,
    setOpenDelete,
    openEdit,
    setOpenEdit,

    ///Menu-States///////////////////////////////////////////////////////////////////////
    openMenu,
    setOpenMenu,
  };
}
export default useShow;
