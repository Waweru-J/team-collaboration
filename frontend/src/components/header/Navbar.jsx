import { useState } from "react";

const Navbar = () => {
  // State to manage the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#101820] p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/path-to-logo.png" // Add your logo image here
            alt="Dealogic Africa"
            className="h-8"
          />
          <h1 className="text-[#FEE715] text-2xl font-bold">Dealogic Africa</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[#FEE715]">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/sustainability" className="hover:text-gray-300">
              Sustainability
            </a>
          </li>
          <li>
            <a href="/global-partnerships" className="hover:text-gray-300">
              Global Partnerships
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-700 text-white">
          <ul className="flex flex-col items-start space-y-2 px-4 py-4">
            <li>
              <a href="/" className="block hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/sustainability" className="block hover:text-gray-300">
                Sustainability
              </a>
            </li>
            <li>
              <a href="/global-partnerships" className="block hover:text-gray-300">
                Global Partnerships
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
