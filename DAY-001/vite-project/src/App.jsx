import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./error-page";
import HireMe from "./HireMe";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SetState from "./SetState";
import Login from "./Login";
import UseReducer from "./UseReducer";
import UseMemo from "./UseMemo";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Orders from "./Orders";
import { socketConnection } from "./utils/socketHandleInitilizer";
import Scribble from "./Scribble";


function App({socket}) {
  const [user,setUser] = useState("")
  useEffect(() => {
    console.log(socket)
    const token = localStorage.getItem("token")
    if(token){
      setUser(jwtDecode(token))
      if(user){
        // socketConnection()
        if(user.exp  < Date.now()){
        localStorage.removeItem("token")
        setUser("")
        document.location.reload()
        }
      }
      console.log(user)
    }
  }, []);




  return (
    <div className="flex flex-col min-h-screen ">
    <BrowserRouter basename="/">
    <NavBar  props={{user:user,setUser:setUser}}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hireMe" element={<HireMe/>} />
        <Route path="/useState" element={<SetState/>} />
        <Route path="/login" element={<Login socket={socket}/>} />
        <Route path="/useReducer" element={<UseReducer/>} />
        <Route path="/useMemo" element={<UseMemo/>} />
        <Route path="/scribble" element={<Scribble/>} />
        <Route path="orders" element={<Orders user={user} socket={socket}/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
