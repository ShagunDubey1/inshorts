/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Sidebar = ({ setIsOpen, isOpen, setCategory }) => {
  const toggleSidebar = () => {
    setIsOpen(() => !isOpen); 
  };

  // console.log(isOpen)

  return (
    <div className="flex">
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0 " : "-translate-x-full"
        } md:translate-x-0 md:w-60 w-72`}
      >
        <div className="flex justify-between p-4">
          <h2 className="text-2xl font-bold">Categories</h2>
          <button onClick={toggleSidebar} className=" text-2xl">
            &#9776;
          </button>
        </div>

        <ul className="mt-8 space-y-4 px-4">
          <li>
            <Link
            onClick={() => setCategory("business")}
              to="/business"
              className="block  px-4  p-2 hover:bg-gray-700 rounded-md"
            >
              Business
            </Link>
          </li>
          <li>
            <Link
            onClick={() => setCategory("entertainment")}
              to="/entertainment"
              className="block  px-4  p-2 hover:bg-gray-700 rounded-md"
            >
              Entertainment
            </Link>
          </li>
          <li>
            <Link
            onClick={() => setCategory("general")}
              to="/general"
              className="block  px-4 p-2 hover:bg-gray-700 rounded-md"
            >
              General
            </Link>
          </li>
          <li>
            <Link
            onClick={() => setCategory("health-science")}
              to="/health-science"
              className="block  px-4  p-2 hover:bg-gray-700 rounded-md"
            >
              Health Science
            </Link>
          </li>
          <li>
            <Link
            onClick={() => setCategory("sports")}
              to="/sports"
              className="block  px-4  p-2 hover:bg-gray-700 rounded-md"
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
            onClick={() => setCategory("technology")}
              to="/technology"
              className="block px-4 p-2 hover:bg-gray-700 rounded-md"
            >
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
