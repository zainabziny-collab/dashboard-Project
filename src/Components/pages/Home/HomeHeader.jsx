/////React-Icons///////////////////////////////////////////////////////////////////////////
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { DiApple } from "react-icons/di";
import { PiSignInFill } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

/////Context////////////////////////////////////////////////////////////////////////////////
import { ShowContext } from "../../../Context/Context";
import { useContext } from "react";
import useShow from "../../Hooks/useShow";

function HomeHeader() {
  /////Hooks////////////////////////////////////////////////////////////////////////////////
  const { openMenu, setOpenMenu } = useShow();
  /////Context//////////////////////////////////////////////////////////////////////////////
  const { themeBtn, setThemeBtn } = useContext(ShowContext);

  return (
    <header className="w-full h-18 bg-slate-950 dark:bg-[#141414] flex items-center justify-between px-5 sm:px-8 text-white ">
      <div className=" flex h-full w-fit gap-2 items-center justify-center ">
        <DiApple className="text-4xl text-[#ff6a00] " />
        <h1 className="text-[1.8rem] text-[#ff6a00] hidden font-semibold lg:block ">
          Apple
        </h1>
        <BiMenu
          className="text-3xl text-[#ff6a00] cursor-pointer sm:hidden mt-3"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </div>

      <ul
        className={`sm:static sm:w-fit sm:h-fit sm:translate-x-0 sm:bg-transparent transform duration-500 ${openMenu ? "-translate-x-[100%]" : ""} bg-slate-900 dark:bg-[#141414] dark:text-white border-r sm:border-none w-full h-screen fixed top-0 left-0 text-[18px] pl-5 pt-5 sm:p-0 space-y-7 `}
      >
        <div className="flex gap-2 size-fit sm:hidden ">
          <DiApple className="text-4xl text-[#ff6a00] " />
          <RxCross2
            className="text-3xl text-[#ff6a00] cursor-pointer mt-2 "
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        </div>
        <div className="pl-4 flex flex-col sm:flex-row sm:p-0 sm:gap-4 gap-3">
          <li className="cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400"
                  : "text-white hover:text-shadow-[0_0_5px_orange] duration-200"
              }
            >
              Home
            </NavLink>
          </li>

          <li className="cursor-pointer">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400"
                  : "text-white hover:text-shadow-[0_0_5px_orange] duration-200"
              }
            >
              Product
            </NavLink>
          </li>

          <li className="cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400"
                  : "text-white hover:text-shadow-[0_0_5px_orange] duration-200"
              }
            >
              About
            </NavLink>
          </li>

          <li className="cursor-pointer ">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400"
                  : "text-white hover:text-shadow-[0_0_5px_orange] duration-200"
              }
            >
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
      <div className="w-fit flex items-center justify-between gap-4 ">
        <button className="w-14 h-10 md:w-24 md:h-10 flex items-center justify-center rounded-md cursor-pointer transtion-all duration-300 active:scale-93 shadow-[0_0_4px_1.5px_white]/20 hover:bg-[#ff6a00] hover:shadow-none ">
          <Link to="/signUp">
            <span className="hidden md:block">Sign Up</span>{" "}
            <PiSignOutBold className="md:hidden" />
          </Link>
        </button>
        <button className="w-14 h-10 md:w-24 md:h-10 flex items-center justify-center rounded-md cursor-pointer transtion-all duration-300 active:scale-93 shadow-[0_0_4px_1.5px_white]/20 hover:bg-[#ff6a00] hover:shadow-none ">
          <Link to="/signIn">
            <span className="hidden md:block">Sign In</span>{" "}
            <PiSignInFill className="md:hidden" />{" "}
          </Link>
        </button>
        <label>
          <div
            className="size-9 shadow-[0_0_4px_1.5px_white]/20 bg-[#141414] rounded-full grid place-items-center"
            onClick={() => {
              setThemeBtn(!themeBtn);
            }}
          >
            {themeBtn ? <CiLight /> : <MdDarkMode />}
          </div>
        </label>
      </div>
    </header>
  );
}

export default HomeHeader;
