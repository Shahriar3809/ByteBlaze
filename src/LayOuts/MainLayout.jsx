import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
      <div>
        <div className="h-20">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default MainLayout;