import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const Main = () => {
    return (
        <div className="max-w-[1550px] px-2 mx-auto">
          <header>
            <Navbar></Navbar>
          </header>
         
<div className="min-h-[calc(100vh-306px)] px-4 pt-20 " >
<Outlet></Outlet>
</div>
  
          <footer className="mt-10">
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Main;