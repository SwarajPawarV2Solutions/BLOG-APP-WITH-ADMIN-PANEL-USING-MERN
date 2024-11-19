import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "All Blogs",
      to: "/all-blogs",
    },
    {
      name: "profile",
      to: "/profile",
    },
    {
      name: "Login",
      to: "/login",
    },
  ];
  return (
    <nav className="flex items-center justify-between py-4 border-b border-zinc-200">
      <div className="w-2/6 brandName">
        <Link to="/" className="text-xl font-bold">
          TCM Blogger
        </Link>
      </div>
      <div className="w-4/6 flex items-center justify-end">
        {links.map((items, i) => (
          <Link 
          className="ms-4 hover:text-blue-600 transition-all duration-300" key={i} to={items.to}>
            {items.name}
          </Link>
        ))}

         <Link className="ms-4 bg-black rounded px-4 py-1 text-zinc-100 hover:bg-blue-600 transition-all duration-300" to="/signup">
         SignUp
          </Link> 
      </div>
    </nav>
  );
};

export default Navbar;
