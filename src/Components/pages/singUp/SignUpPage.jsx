import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="w-full h-screen relative flex items-center justify-center bg-slate-950">
      <button className="absolute top-8 z-100 left-8 text-white ">
              <Link className="flex gap-1 items-center " to={"/"}>
                <PiSignOutBold />
                <span>Back</span>
              </Link>
            </button>

      <div className="w-200 h-110 backdrop-blur-[5px] text-white shadow-[0_0_5px_#afbdd2] flex flex-col items-center justify-start gap-5 p-7 pt-8 rounded-xl  ">
        <h1 className="text-[2rem] text-[#ff6a00] font-bold  ">Registration</h1>
        <form
          action=""
          className="w-full flex gap-5 flex-col items-center justify-center "
        >
          <div className="w-full flex gap-6 ">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Fist Name"
              className=" rounded-md w-2/4 py-2.5 px-3 shadow-[0_0_5px_#afbdd2]/80 focus:shadow-[0_0_5px_#afbdd2]  "
            />
            <input
              type="text"
              name="name"
              id=""
              placeholder="Last Name"
              className=" rounded-md w-2/4 py-2.5 px-3 shadow-[0_0_5px_#afbdd2]/80 focus:shadow-[0_0_5px_#afbdd2] "
            />
          </div>

          <div className="w-full flex gap-6 ">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Phone Number"
              className=" rounded-md w-2/4 py-2.5 px-3 shadow-[0_0_5px_#afbdd2]/80 focus:shadow-[0_0_5px_#afbdd2]  "
            />
            <input
              type="text"
              name="name"
              id=""
              placeholder="Email"
              className=" rounded-md w-2/4 py-2.5 px-3 shadow-[0_0_5px_#afbdd2]/80 focus:shadow-[0_0_5px_#afbdd2] "
            />
          </div>

          <div className="w-full flex gap-6 ">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Password"
              className=" rounded-md w-2/4 py-2.5 px-3 shadow-[0_0_5px_#afbdd2]/80 focus:shadow-[0_0_5px_#afbdd2]  "
            />
            <input
              type="text"
              name="name"
              id=""
              placeholder="Confirm Password"
              className=" rounded-md w-2/4 py-2.5 px-3 shadow-[0_0_5px_#afbdd2]/80 focus:shadow-[0_0_5px_#afbdd2] "
            />
          </div>
        </form>

        <div className="flex gap-5 flex-col ">
          <button className=" px-5.5 py-2 rounded-md cursor-pointer active:bg-[#eb4600] bg-[#ff5500] text-white active:scale-95 duration-200 transition-all">
            <Link to="/dashboard">Sign In</Link>
          </button>
          <div className=" w-fit flex flex-col ">
            <div className="flex gap-2">
              <p>Do you have an account? </p>
              <button className=" text-md font-semibold cursor-pointer active:scale-95  duration-150 transition-all ">
                <Link to="/signIn">Sign In</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
