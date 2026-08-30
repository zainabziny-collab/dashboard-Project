import {useContext} from 'react'
import DashboardHeader from '../../Components/pages/dashboard/dashboardHeader/DashboardHeader'
import { BiMenu } from 'react-icons/bi'
import Topbar from '../../Components/pages/dashboard/topbar/Topbar'
import { Outlet } from 'react-router-dom'
import { ShowContext } from '../../Context/Context'

function DashboardLayout() {
    const { setOpenMenu,openMenu } = useContext(ShowContext);
  return (
  <div className="w-full min-h-screen ">
      <div className=" w-full min-h-screen bg-[#e0e4e7] dark:bg-[#222222] dark:text-white flex md:gap-4 px-3 md:px-0 md:pr-4 items-start justify-between ">
        <div>
          <DashboardHeader />
        </div>
        <div className=" w-full md:w-[calc(100%-110px)] lg:w-[calc(100%-220px)] min-h-[92vh] border-white border rounded-md px-2 sm:px-5 mb-7 mt-4 py-2 flex flex-col justify-start items-center gap-10 ">
          <div className="w-full flex justify-between items-center">
            <BiMenu
              className="text-3xl text-[#ff6a00] cursor-pointer md:hidden"
              onClick={()=>{setOpenMenu(!openMenu)}}
            />
            <Topbar />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-10 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout