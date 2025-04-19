import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white w-1/2 px-6 py-4 flex justify-between items-center">
      <Link to="/"><div className="text-xl font-extrabold text-brand-primary">kommune</div></Link>

      {/* Hover container */}
      <div className="relative group inline-block">
        <button className="hover:bg-gray-300 px-4 py-2 rounded">
          Products
        </button>

        {/* Dropdown */}
        <div className="absolute border right-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10">
          <Link
            to="/productone"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Product One
          </Link>
          <Link
            to="/producttwo"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Product Two
          </Link>
          <Link
            to="/productthree"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Product Three
          </Link>
        </div>
      </div>



      <div className="relative group inline-block">
        <button className="hover:bg-gray-300 px-4 py-2 rounded">
          Products
        </button>

        {/* Dropdown */}
        {/* <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10">
          <a
            href="#profile"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Profile
          </a>
          <a
            href="#settings"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Settings
          </a>
          <a
            href="#logout"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </a>
        </div> */}
      </div>


    </nav>
  );
};

export default Navbar;
