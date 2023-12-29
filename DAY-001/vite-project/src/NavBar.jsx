import { Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div>
        <div id="home" className="flex min-w-screen justify-center gap-[4rem] p-2 font-sans backdrop-blur-sm font-semibold text-white bg-yellow-500">
        <Link className="transition-all hover:text-blue-500" to="/">Home</Link>
          <Link className="transition-all hover:text-blue-500" to="/HireMe">Hire Me</Link>
        </div>
        
   
      </div>
  )
}
