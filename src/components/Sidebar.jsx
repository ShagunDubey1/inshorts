/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const categories = [
  { name: 'Business', path: '/business' },
  { name: 'Entertainment', path: '/entertainment' },
  { name: 'General', path: '/general' },
  { name: 'Health', path: '/health' },
  { name: 'Science', path: '/science' },
  { name: 'Sports', path: '/sports' },
  { name: 'Technology', path: '/technology' },
];

const Sidebar = ({ setIsOpen, isOpen, setCategory }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };
  console.log(isOpen);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white  flex-shrink-0 transition-all ease-in-out duration-500   z-10 ${
        isOpen ? ' -translate-x-full w-0 ' : 'translate-x-0 md:w-60 w-72'
      } md:translate-x-0 `}
    >
      <div
        className={`flex justify-between p-4   ease-in-out duration-100  ${isOpen ? ' -translate-x-[1500%] ' : 'translate-x-0 '}`}
      >
        <h2 className="text-2xl font-bold">Categories</h2>
        <button onClick={toggleSidebar} className="text-2xl">
          &#10005;
        </button>
      </div>

      <ul
        className={`mt-8 space-y-4 px-4  ease-in-out duration-100 ${
          isOpen ? ' -translate-x-[1500%] ' : 'translate-x-0 '
        }`}
      >
        {categories.map((category) => (
          <li key={category.path}>
            <NavLink
              onClick={() => handleCategoryClick(category.name.toLowerCase())}
              to={category.path}
              className={({ isActive }) =>
                `block px-4 p-2 rounded-md hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
