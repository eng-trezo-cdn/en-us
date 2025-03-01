import React from 'react';
import { Shield, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Trezor.io/start</span>
            </div>
            <p className="text-green-100 mb-4">
              The official setup portal for Trezor hardware wallets. Version v25.2.2 provides enhanced security and user experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white">Trezor.io/start Guide</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Download v25.2.2</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Firmware Updates</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Security Features</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Troubleshooting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-green-100 hover:text-white">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
          <p>© 2025 Trezor.io/start. All rights reserved. Version v25.2.2</p>
          <p className="mt-2 text-sm">
            Trezor.io/start is the official setup portal for Trezor hardware wallets. Always verify you're on the authentic website.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;