import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="flex items-center justify-between bg-emerald-600 px-5 py-2">
        <h3 className="text-2xl font-bold">
          <Link to="/">LOGO</Link>
        </h3>
        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
};

export default Navbar;