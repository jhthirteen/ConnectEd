const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto flex justify-start space-x-8">
            <a href="/about" className="text-white px-4 py-2">Mission</a>
            <a href="/user" className="text-white px-4 py-2">Documentation</a>
          </div>
        </nav>
    );
};
export default Navbar;