

function Header() {
  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">inshorts</h1>
        <button className="text-lg bg-transparent focus:outline-none">Menu</button>
      </div>
    </header>
  );
}

export default Header;
