import { Link } from "react-router-dom";
import { PiSignOutBold } from "react-icons/pi";

function SignInPage() {
  return (
    <div className="w-full h-screen bg-slate-950 relative flex items-center justify-center">
      <button className="absolute top-8 z-100 left-8 text-white ">
        <Link className="flex gap-1 items-center " to={"/"}>
          <PiSignOutBold />
          <span>Back</span>
        </Link>
      </button>

      <div className="w-120 h-110 backdrop-blur-[10px]  shadow-[0_0_5px_#afbdd2] flex flex-col items-center justify-start gap-5 p-7 pt-8 rounded-xl  ">
        <h1 className="text-[2rem] text-[#ff6a00] font-bold  ">Login</h1>
        <form
          className="w-full flex gap-5 flex-col items-center justify-center "
        >
          <input
            type="text"
            placeholder="Username"
            className=" rounded-md w-full text-white py-2.5 px-3 shadow-[0_0_5px_#afbdd2]/80  "
          />
          <input
            type="text"
            placeholder="Password"
            className=" rounded-md w-full text-white py-2.5 px-3 shadow-[0_0_5px_#afbdd2]/80 "
          />
        </form>

        <div className="flex w-full gap-5 flex-col items-center justify-center ">
          <button className=" px-5.5 py-2 w-full rounded-md cursor-pointer active:bg-[#eb4600] bg-[#ff5500] text-white active:scale-95 duration-200 transition-all">
            <Link to="/dashboard">Sign In</Link>
          </button>
          <div className=" w-fit flex flex-col text-white ">
            <div className="flex gap-2">
              <p>Don't have an account? </p>
              <button className=" text-md font-semibold cursor-pointer active:scale-95  duration-150 transition-all ">
                <Link to="/signUp">Sign Up</Link>
              </button>
            </div>
            <p className="cursor-pointer">Forgot Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
