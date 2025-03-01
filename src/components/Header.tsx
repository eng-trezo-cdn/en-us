import React from 'react';
import { Menu, X, Shield, HelpCircle, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 max-w-5xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-green-800" />
            <span className="ml-2 text-xl font-bold text-green-800">Trezor.io/start</span>
            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">v25.2.2</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#guide" className="text-gray-700 hover:text-green-800 font-medium">Setup Guide</a>
            <a href="#faq" className="text-gray-700 hover:text-green-800 font-medium">FAQ</a>
            <a href="#" className="text-gray-700 hover:text-green-800 font-medium flex items-center">
              <Download className="h-4 w-4 mr-1" /> Download
            </a>
            <a href="#" className="text-gray-700 hover:text-green-800 font-medium flex items-center">
              <HelpCircle className="h-4 w-4 mr-1" /> Support
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-green-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#guide" className="block text-gray-700 hover:text-green-800 font-medium py-2">Setup Guide</a>
            <a href="#faq" className="block text-gray-700 hover:text-green-800 font-medium py-2">FAQ</a>
            <a href="#" className="block text-gray-700 hover:text-green-800 font-medium py-2 flex items-center">
              <Download className="h-4 w-4 mr-1" /> Download
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-800 font-medium py-2 flex items-center">
              <HelpCircle className="h-4 w-4 mr-1" /> Support
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;