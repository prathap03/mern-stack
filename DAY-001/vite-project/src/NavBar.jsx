import { Link, useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';
export default function NavBar({props: { user, setUser }}) {
  NavBar.propTypes = {
    props:PropTypes.object.isRequired
  }
  const Logout = ()=>{
    localStorage.removeItem("token")
    setUser("")
    
  }
  return (
    <div>
        <div id="home" className="flex min-w-screen justify-center md:gap-[4rem] gap-[1rem] p-2 md:text-[1rem] text-[0.5rem] font-sans backdrop-blur-sm font-semibold text-white bg-yellow-500">
        <Link className="transition-all hover:text-blue-500" to="/">Home</Link>
          <Link className="transition-all hover:text-blue-500" to="/HireMe">Hire Me</Link>
          <Link className="transition-all hover:text-blue-500" to="/useState">useState</Link>
          <Link className="transition-all hover:text-blue-500" to="/login">Login</Link>
          {/* <Link className="transition-all hover:text-blue-500" to="/useReducer">useReducer</Link> */}
          {/* <Link className="transition-all hover:text-blue-500" to="/useMemo">useMemo</Link> */}
          <Link className="transition-all hover:text-blue-500" to="/orders">Orders</Link>
          <Link className="transition-all hover:text-blue-500" to="/scribble">Scribble</Link>
          {user && ( <button onClick={()=>Logout()} className="p-1 w-[5rem] hover:bg-blue-700 transition-all active:scale-90 font-semibold text-white bg-blue-500 rounded-md shadow-sm">Logout</button>)}
         
        </div>
        
   
      </div>
  )
}
