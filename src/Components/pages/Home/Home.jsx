///Home//////////////////////////////////////////////////////////////////////////////////
import HomeHeader from "./HomeHeader";
import ProductBox from "./ProductBox";
import HomeSearchBar from "./HomeSearchBar";

function Home() {
  return (
    <>
      <HomeHeader />
      <div className="w-full min-h-[calc(100vh-72px)] bg-[#e0e4e7] dark:bg-[#222222] p-5">
        <div className=" w-full min-h-[calc(100vh-72px)] flex flex-col items-center justify-start gap-8 border overflow-hidden border-white rounded-xl pb-10 pt-5 px-3 ">
          <HomeSearchBar />
          <ProductBox />
        </div>
      </div>
    </>
  );
}

export default Home;
