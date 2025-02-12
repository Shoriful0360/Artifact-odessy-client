import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const Main = () => {
    return (
        <div className="">
          <header>
            <Navbar></Navbar>
          </header>
         
<div className="min-h-[calc(100vh-230px)] mx-auto px-1 pt-12 " >
<Outlet></Outlet>
</div>
  
          <footer className="mt-10">
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Main;