import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./error-page";
import HireMe from "./HireMe";
import NavBar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hireMe" element={<HireMe/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
