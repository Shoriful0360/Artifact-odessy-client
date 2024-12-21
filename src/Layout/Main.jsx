import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const Main = () => {
    return (
        <div>
          <header>
            <Navbar></Navbar>
          </header>
         
<div className="min-h-[calc(100vh-306px)]" >
<Outlet></Outlet>
</div>
  
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Main;