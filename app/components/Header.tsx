import Link from 'next/link';
import '../globals.css';

export default function CustomHeader() {
  return (
    <header className="custom-header bg-red-700 text-white p-4">
      <div className="header-container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="logo text-3xl font-extrabold">
          <Link href="/" className="logo-link hover:text-gray-300">Home</Link>
        </h1>

        {/* Navigation Links */}
        <nav className="navigation-links hidden md:flex space-x-6">
          <Link href="/All" className="nav-link hover:text-gray-300">All Products</Link>
          <Link href="/Page2" className="nav-link hover:text-gray-300">Page 2</Link>
          <Link href="/Page3" className="nav-link hover:text-gray-300">Page 3</Link>
          <Link href="/All" className="nav-link hover:text-gray-300">Tables</Link>
          <Link href="#chairs" className="nav-link hover:text-gray-300">Chairs</Link>
          <Link href="#crockery" className="nav-link hover:text-gray-300">Crockery</Link>
          <Link href="#tableware" className="nav-link hover:text-gray-300">Tableware</Link>
        </nav>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="mobile-menu-button md:hidden flex items-center">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
