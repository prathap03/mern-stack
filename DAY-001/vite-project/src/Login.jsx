import { useState } from "react";


export default function Login() {
    const [switchLayout, setSwitchLayout] = useState(false);
  return (
    <div className="flex flex-col gap-2 flex-grow bg-[#f6f5fb] justify-center items-center">
        {/* <div className="flex min-w-[50%] max-w-[50%] overflow-visible z-[100]">
        
        </div>

        <div className="bg-[#ff7b1d]  overflow-clip flex flex-grow">
        <div className=" bg-[#f6f5fb] min-w-[100%] rounded-[100%]  -ml-[30rem] relative ">
            <div className="bg-white min-h-[5rem] min-w-[5rem] -right-[2rem] top-[26rem] bottom-[26rem] absolute rounded-[100%]">
            
            </div>
        </div>
        </div> */}

    <h1 className="font-semibold text-[1.5rem]">Sign In/Up Form</h1>
    <div className={`flex ${switchLayout?"hidden transition-all duration-200":""} max-w-[37%] bg-white rounded-md shadow-lg justify-evenly`}>
        <div className={`flex flex-col items-center justify-center flex-grow gap-2 w-[100%] p-[2rem] ${switchLayout?"translate-x-[100%] transition-all duration-200":"translate-x-[0%] transition-all duration-200"} text-white  bg-red-500 rounded-l-md`}>
            <h1 className=" text-[2rem] font-semibold">Welcome Back!</h1>
            <p className="text-center">To keep connected with us please login with your personal info</p>
            <button onClick={()=>setSwitchLayout(!switchLayout)} className="p-2 mt-4 rounded-full outline outline-1 w-[50%] font-medium">SIGN IN</button>
        </div>

        <div className="flex flex-grow w-[50%] flex-shrink-0 p-[2.5rem]   flex-col items-center bg-white">
            <form>

            <h1 className="text-[2.2rem] font-semibold">Create Account</h1>
            
            <div className="flex items-center justify-center gap-4 social-container">
          <a href="#" className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>

        <div className="w-[100%] mt-4 text-gray-600 font-semibold flex justify-center items-center">
        <h1>or use your email for registration</h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-4">
            <input className="w-[110%] rounded-sm h-[2.5rem]  text-[#333] p-4 bg-[#eee]" placeholder="Name" type="text" required />
            <input className="w-[110%] rounded-sm h-[2.5rem]  text-[#333] p-4 bg-[#eee]" placeholder="Email" type="email" required />

            <input className="w-[110%] rounded-sm h-[2.5rem]  text-[#333] p-4 bg-[#eee]" placeholder="Password" type="password" required />

        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-4">
            <button className="p-2 text-white bg-red-500 rounded-full w-[50%] mt-5 font-semibold">SIGN UP</button>
        </div>
            </form>
        </div>

        
    </div>

    <div className={`flex ${!switchLayout?"hidden transition-all duration-200":"flex transition-all duration-200"} max-w-[37%] bg-white rounded-md shadow-lg justify-evenly`}>

        
        <div className="flex flex-grow w-[50%] flex-shrink-0 p-[2.5rem]   flex-col items-center bg-white">
            <form>

            <div className="flex items-center justify-center mb-2">
            <h1 className="text-[2.2rem] font-semibold">Sign In</h1>
            </div>
            
            <div className="flex items-center justify-center gap-4 social-container">
          <a href="#" className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="w-[2rem] h-[2rem] flex justify-center items-center bg-transparent outline outline-1 outline-slate-200 rounded-[100%]">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>

        <div className="w-[100%] mt-4 text-gray-600 font-semibold flex justify-center items-center">
        <h1>or use your email for registration</h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-4">
            
            <input className="w-[110%] rounded-sm h-[2.5rem]  text-[#333] p-4 bg-[#eee]" placeholder="Email" type="email" required />

            <input className="w-[110%] rounded-sm h-[2.5rem]  text-[#333] p-4 bg-[#eee]" placeholder="Password" type="password" required />

    

        </div>

        <div className="flex items-center justify-center p-2 text-[0.9rem] mt-2">
            <h1>Forgot your password?</h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 ">
            <button  className="p-2 text-white bg-red-500 rounded-full w-[50%] mt-5 font-semibold">SIGN IN</button>
        </div>
            </form>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow gap-2 w-[100%] p-[2rem] text-white bg-red-500 rounded-l-md">
            <h1 className=" text-[2rem] font-semibold">Hello, Friend!</h1>
            <p className="text-center">Enter your personal details and start journey with us</p>
            <button onClick={()=>setSwitchLayout(!switchLayout)} className="p-2 mt-4 rounded-full outline outline-1 w-[50%] font-medium">SIGN UP</button>
        </div>
    </div>

    </div>
  )
}
