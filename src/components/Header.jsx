

function Header({ setIsOpen, isOpen, setCategory }) {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-2xl text-black">
            &#9776;
        </button>
        <h1 className="text-2xl font-bold text-gray-800">inshorts</h1>
        <button className="text-lg bg-transparent focus:outline-none"></button>
      </div>
    </header>
  );
}

export default Header;
