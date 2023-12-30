import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [switchLayout, setSwitchLayout] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-2 flex-grow bg-[#f6f5fb] justify-center items-center"
    >
      {/* <div className="flex min-w-[50%] max-w-[50%] overflow-visible z-[100]">
        
        </div>

        <div className="bg-[#ff7b1d]  overflow-clip flex flex-grow">
        <div className=" bg-[#f6f5fb] min-w-[100%] rounded-[100%]  -ml-[30rem] relative ">
            <div className="bg-white min-h-[5rem] min-w-[5rem] -right-[2rem] top-[26rem] bottom-[26rem] absolute rounded-[100%]">
            
            </div>
        </div>
        </div> */}

      <h1 className="font-semibold text-[1.5rem]">Sign In/Up Form</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`flex ${
          switchLayout ? " transition-all duration-200" : ""
        } min-w-[45.5rem] relative max-w-[37%] bg-white rounded-md shadow-2xl justify-evenly`}
      >
        <div
          className={`flex flex-col items-center justify-center flex-grow gap-2 w-[50%] left-0 h-[100%] p-[2rem] absolute ${
            switchLayout
              ? "translate-x-[100%] transition-all duration-700"
              : "translate-x-[0%] transition-all duration-700"
          } text-white bg-gradient-to-r z-10 from-[#ff4b2b] to-[#ff416c] rounded-l-md`}
        >
          <h1
            className={`text-[2rem] font-semibold ${
              switchLayout
                ? "-translate-x-[220%] opacity-0 invisible max-h-0 transition-all duration-700"
                : "translate-x-[0%] opacity-100 transition-all duration-700"
            }`}
          >
            Welcome Back!
          </h1>
          <p
            className={`text-center ${
              switchLayout
                ? "-translate-x-[220%] opacity-0 transition-all invisible max-h-0 duration-700"
                : "translate-x-[0%] opacity-100 transition-all duration-700"
            }`}
          >
            To keep connected with us please login with your personal info
          </p>

          <h1
            className={`text-[2rem] font-semibold ${
              switchLayout
                ? "translate-x-[0%] opacity-100 transition-all duration-700"
                : "translate-x-[200%] opacity-0 invisible max-h-0 transition-all duration-700"
            }`}
          >
            Hello, Friend!
          </h1>
          <p
            className={`text-center ${
              switchLayout
                ? "translate-x-[0%] opacity-100 transition-all duration-700"
                : "translate-x-[200%] opacity-0 invisible max-h-0 transition-all duration-700"
            }`}
          >
            Enter your personal details and start journey with us
          </p>

          <button
            onClick={() => setSwitchLayout(!switchLayout)}
            className={`p-2 active:scale-95 transition-all ease-in-out duration-75 mt-4 rounded-full outline outline-1 w-[50%] font-medium ${
              switchLayout
                ? " transition-all duration-700"
                : "translate-x-[0%] opacity-100 transition-all duration-700"
            }`}
          >
            SIGN {switchLayout ? "UP" : "IN"}
          </button>
        </div>
        <div
          className={`flex ${
            !switchLayout
              ? " translate-x-[100%] duration-700 opacity-0 -z-10"
              : "translate-x-[0%] duration-700"
          } flex-grow w-[50%] flex-shrink-0 p-[2.5rem]   flex-col items-center bg-white`}
        >
          <form>
            <div className={`flex items-center justify-center mb-2 z-5`}>
              <h1 className="text-[2.2rem] font-semibold">Sign In</h1>
            </div>

            <div className="flex items-center justify-center gap-4 social-container">
              <a
                href="#"
                className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]"
              >
                <i className="fab fa-google-plus-g" />
              </a>
              <a
                href="#"
                className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>

            <div className="w-[100%] mt-4 text-gray-600 font-semibold flex justify-center items-center">
              <h1>or use your email for registration</h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mt-4">
              <input
                className="w-[110%] rounded-sm h-[2.5rem]  text-[#333] p-4 bg-[#eee]"
                placeholder="Email"
                type="email"
                required
              />

              <input
                className="w-[110%] rounded-sm h-[2.5rem]  text-[#333] p-4 bg-[#eee]"
                placeholder="Password"
                type="password"
                required
              />
            </div>

            <div className="flex items-center justify-center p-2 text-[0.9rem] mt-2">
              <h1>Forgot your password?</h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 ">
              <button className="p-2 text-white bg-red-500 rounded-full w-[50%] mt-5 font-semibold">
                SIGN IN
              </button>
            </div>
          </form>
        </div>

        <div
          className={`flex ${
            switchLayout
              ? " -translate-x-[100%] duration-700 opacity-0 -z-10"
              : "translate-x-[0%] duration-700"
          } flex-grow w-[50%] flex-shrink-0 p-[2.5rem]   flex-col items-center bg-white`}
        >
          <form>
            <h1 className="text-[2.2rem] font-semibold">Create Account</h1>

            <div className="flex items-center justify-center gap-4 social-container">
              <a
                href="#"
                className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]"
              >
                <i className="fab fa-google-plus-g" />
              </a>
              <a
                href="#"
                className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>

            <div className="w-[100%] mt-4 text-gray-600 font-semibold flex justify-center items-center">
              <h1>or use your email for registration</h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mt-4">
              <input
                className="w-[110%] rounded-sm h-[2.5rem]  text-[#333] p-4 bg-[#eee]"
                placeholder="Name"
                type="text"
                required
              />
              <input
                className="w-[110%] rounded-sm h-[2.5rem]  text-[#333] p-4 bg-[#eee]"
                placeholder="Email"
                type="email"
                required
              />

              <input
                className="w-[110%] rounded-sm h-[2.5rem]  text-[#333] p-4 bg-[#eee]"
                placeholder="Password"
                type="password"
                required
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mt-4">
              <button className="p-2 text-white bg-red-500 rounded-full w-[50%] mt-5 font-semibold">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
