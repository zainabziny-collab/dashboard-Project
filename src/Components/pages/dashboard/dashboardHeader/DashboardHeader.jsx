///React-Icons///////////////////////////////////////////////////////////////////////////////
import { RxDashboard } from "react-icons/rx";
import { MdPeopleAlt } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import { MdHelpOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { DiApple } from "react-icons/di";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

///Contexts///////////////////////////////////////////////////////////////////////////////
import { useContext } from "react";
import { ShowContext } from "../../../../Context/Context";

const DashboardHeader = () => {
  ///Contexts///////////////////////////////////////////////////////////////////////////////

  const { openMenu, setOpenMenu } = useContext(ShowContext);

  return (
    <>
      <header
        className={`w-[100%] md:w-[90px] lg:w-[200px] md:translate-x-0 h-screen fixed md:fixed top-0 left-0 z-2 md:flex bg-slate-950 dark:bg-[#141414] flex-col gap-8 pl-4 pt-8 text-white transform duration-500 ${openMenu ? "-translate-x-[102%]" : ""} `}
      >
        <RxCross2
          className="text-3xl text-[#ff6a00] cursor-pointer ml-2 md:hidden "
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
        <DiApple className="text-4xl text-[#ff6a00] hidden md:block md:ml-2 lg:ml-0 " />

        <ul className="flex flex-col mt-5 md:mt-0 ">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive
                ? "font-semibold liStyle group style dark-liStyle"
                : "font-semibold liStyle group"
            }
          >
            <RxDashboard className="text-xl text-white iconStyle " />{" "}
            <span className=" md:hidden lg:block">Dashboard</span>
          </NavLink>
          <NavLink
            to="customer"
            className={({ isActive }) =>
              isActive
                ? "font-semibold liStyle group style dark-liStyle "
                : "font-semibold liStyle group"
            }
          >
            <MdPeopleAlt className="text-xl text-white iconStyle" />{" "}
            <span className=" md:hidden lg:block">Customers</span>
          </NavLink>
          <NavLink
            to="message"
            className={({ isActive }) =>
              isActive
                ? "font-semibold liStyle group style dark-liStyle"
                : "font-semibold liStyle group"
            }
          >
            <TbMessage2 className="text-xl text-white iconStyle " />{" "}
            <span className=" md:hidden lg:block">Message</span>
          </NavLink>
          <NavLink
            to="help"
            className={({ isActive }) =>
              isActive
                ? "font-semibold liStyle group style dark-liStyle"
                : "font-semibold liStyle group"
            }
          >
            <MdHelpOutline className="text-xl text-white iconStyle " />{" "}
            <span className=" md:hidden lg:block">Help</span>
          </NavLink>
          <NavLink
            to="setting"
            className={({ isActive }) =>
              isActive
                ? "font-semibold liStyle group style dark-liStyle"
                : "font-semibold liStyle group"
            }
          >
            <IoSettingsOutline className="text-xl text-white iconStyle " />{" "}
            <span className=" md:hidden lg:block">Settings</span>
          </NavLink>
          <NavLink
            to="password"
            className={({ isActive }) =>
              isActive
                ? "font-semibold liStyle group style dark-liStyle"
                : "font-semibold liStyle group"
            }
          >
            <RiLockPasswordLine className="text-xl text-white iconStyle " />{" "}
            <span className=" md:hidden lg:block">Password</span>
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold liStyle group style dark-liStyle"
                : "font-semibold liStyle group"
            }
          >
            <PiSignOutBold className="text-xl text-white iconStyle " />{" "}
            <span className=" md:hidden lg:block">Sign Out</span>
          </NavLink>
        </ul>
      </header>
    </>
  );
};

export default DashboardHeader;
