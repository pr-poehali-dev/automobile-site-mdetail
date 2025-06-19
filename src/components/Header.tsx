import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "/" },
    { name: "Детейлинг", href: "/detailing" },
    { name: "Галерея", href: "/gallery" },
    { name: "Цены", href: "/prices" },
    { name: "Контакты", href: "/contacts" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={32} className="text-blue-500" />
            <h1 className="text-2xl font-bold font-montserrat">MDetail</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name="Menu" size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block hover:text-blue-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
