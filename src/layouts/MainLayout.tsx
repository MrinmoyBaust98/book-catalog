import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="mx-32 my-6">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
