import navlogo from "../assets/images/navbarlogo.png";
import avalogo from "../assets/images/profileavatar.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1 ">
          <div className="w-12 rounded-full">
            <img src={navlogo} />
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Book Catalog
          </Link>
        </div>
        <div className="flex-none gap-20 align-middle">
          <div className="  navbar-center hidden  lg:flex ">
            <ul className="menu menu-horizontal px-1 text-xl font-medium  ">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/books">Books</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avalogo} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="#" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
