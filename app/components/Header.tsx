import Link from 'next/link';
import '../globals.css';

export default function Header() {
  return (
    <header className="text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="header-link hover:text-gray-400">Home</Link>
        </h1>

        {/* Navigation Section */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/All" className="header-link hover:text-gray-400">All Products</Link>
          <Link href="/Page2" className="header-link hover:text-gray-400">Page 2</Link>
          <Link href="/Page3" className="header-link hover:text-gray-400">Page 3</Link>
          <Link href="/All" className="header-link hover:text-gray-400">Tables</Link>
          <Link href="#chairs" className="header-link hover:text-gray-400">Chairs</Link>
          <Link href="#crockery" className="header-link hover:text-gray-400">Crockery</Link>
          <Link href="#tableware" className="header-link hover:text-gray-400">Tableware</Link>
        </nav>

        {/* Mobile Menu Button (visible only on small screens) */}
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
