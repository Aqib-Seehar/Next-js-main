import Link from 'next/link';
import ArrowRight from "@/assets/arrow-right-short.svg"
import Image from 'next/image';
const Header = () => {
  const navItems = [
    'Search Vehicle',
    'How it Works',
    'About us',
    'Blog',
    'Contact',
  ];

  return (
    // Thin blue accent line at the very top
    <header className="relative border-t-2 border-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 tracking-wider">
              SILVER RIVER
              <div className="text-sm font-medium">MOTOR COMPANY</div>
            </Link>
          </div>

          {/* Navigation Links (Hidden on mobile) */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link key={item} href="#" className="text-gray-600 hover:text-blue-600">
                {item}
              </Link>
            ))}
          </nav>

          {/* Action Buttons (Right) */}
          <div className="flex items-center space-x-3">
            {/* Login Button - Primary Blue */}
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-150">
              Login
            </button>
            {/* Register Button - Dark/Outline Style */}
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700 transition duration-150">
              Register
            </button>
            
            {/* Hamburger Icon for Mobile (Not fully implemented here, but reserved) */}
            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
                {/* Placeholder for Menu Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Thin blue line/separator below the header content area */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
    </header>
  );
};

export default Header;
