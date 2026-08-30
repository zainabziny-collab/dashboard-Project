import { FiSearch } from "react-icons/fi";
////Context///////////////////////////////////////////////////////////////////////////
import { ShowContext } from "../../../Context/Context";
import { useContext } from "react";

function HomeSearchBar() {
  ////Context///////////////////////////////////////////////////////////////////////////
  const { setSearchInput, setPriceInput, setCategoryInput } =
    useContext(ShowContext);
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between ">
      <div className=" flex flex-row items-center gap-2 w-full md:w-1/3 lg:w-72 py-1 md:py-1.5 px-4 app-color-gray rounded-3xl effect-inner darkEffect ">
        <FiSearch className="text-[15px] md:text-[17px] " />
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search for ..."
        />
      </div>

      <div className="flex items-center justify-between md:w-2/3 lg:w-2/3 gap-4 w-full ">
        <select
          onChange={(e) => setCategoryInput(e.target.value)}
          className="md:w-1/2 w-[50%] lg:w-72 flex flex-row py-1.5 md:py-2 px-6 darkEffect effect justify-between rounded-xl outline-none"
        >
          <option value="all">All Categories</option>
          <option value="clothe">Clothes</option>
          <option value="beauty">Luxury Beauties</option>
          <option value="furnitur">House Furnitures</option>
          <option value="sport">Sports Gear</option>
        </select>

        <select
          onChange={(e) => setPriceInput(e.target.value)}
          className="md:w-1/2 w-[50%] lg:w-72 flex flex-row py-1.5 md:py-2 px-6 darkEffect effect justify-between rounded-xl outline-none"
        >
          <option value="all">All Price</option>
          <option value="0-10000">Under 10000AF</option>
          <option value="10000-20000">10000AF To 20000AF</option>
          <option value="20000-90000">Over 20000AF</option>
        </select>
      </div>
    </div>
  );
}

export default HomeSearchBar;
