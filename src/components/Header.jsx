import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#internships', label: 'Internships' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 px-6 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold hover:text-amber-400 transition-colors">
          ARUNKUMAR D
        </a>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-blue-900 md:hidden">
            <ul className="flex flex-col p-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 hover:text-yellow-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}