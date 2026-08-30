import profile from "../../../../assets/Pink-profile-01-12.jpg";
//////Contexts//////////////////////////////////////////////////////
import { ShowContext } from "../../../../Context/Context";
import { useContext } from "react";
//////React-Icons//////////////////////////////////////////////////////
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

function Topbar() {
  //////Contexts//////////////////////////////////////////////////////
  const { themeBtn, setThemeBtn,dark, setDark, setDSearchInput } = useContext(ShowContext);

  return (
    <>
      <div className=" flex flex-row items-center gap-2 w-60 lg:w-72 py-1 px-3 lg:py-1.5 lg:px-5 app-color-gray rounded-3xl effect-inner darkEffect ">
        <FiSearch className="text-[15px] lg:text-[17px] " />
        <input
          type="text"
          placeholder="Search for ..."
          onChange={(e) => {
            setDSearchInput(e.target.value);
          }}
        />
      </div>

      <div className=" flex lg:gap-5 gap-3 items-center justify-between">
        <label>
          <div className="switch">
            <input
              onClick={() => {
                setThemeBtn(!themeBtn);
                setDark(!dark)
              }}
              className=" hidden"
              type="checkbox"
            />
            <div className="switch-bg dark-switch-bg"></div>
            <div className="switch-indicator dark-switch-indicator"></div>
          </div>
        </label>
        <IoSettingsOutline className="text-black/70 dark:text-white text-2xl hidden sm:block" />
        <FaRegBell className="text-black/70 dark:text-white text-2xl hidden sm:block " />
        <div className="w-12 h-12 overflow-hidden rounded-full ">
          <img src={profile} alt="" className="w-full rounded-full" />
        </div>
      </div>
    </>
  );
}

export default Topbar;
