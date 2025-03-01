import React from 'react';
import { Shield, Wallet, HelpCircle, ChevronRight, ArrowRight, Settings, Download } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-800 to-green-900 rounded-lg p-8 text-white shadow-xl">
            <h1 className="text-4xl font-bold mb-4">Trezor.io/start: Complete Setup Guide</h1>
            <p className="text-xl mb-6">Version v25.2.2 - Your gateway to secure cryptocurrency management</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#guide" className="bg-white text-green-800 px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 transition-colors">
                Start Setup <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#faq" className="border border-white text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-green-700 transition-colors">
                Read FAQ <HelpCircle className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section id="guide" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-2 border-green-800 pb-2">Getting Started with Trezor.io/start</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Trezor.io/start is the official starting point for setting up your Trezor hardware wallet. 
            With the latest Version v25.2.2, the process has become even more streamlined and secure. 
            This comprehensive guide will walk you through every step needed to properly initialize 
            your Trezor device and ensure your cryptocurrencies remain protected.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <Wallet className="h-10 w-10 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-green-800">Why Use Trezor.io/start?</h3>
              <p className="text-gray-700">
                Trezor.io/start provides the official firmware and software needed for your Trezor device. 
                Using Version v25.2.2 ensures you have the latest security features and improvements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <Shield className="h-10 w-10 text-green-800 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-green-800">Enhanced Security</h3>
              <p className="text-gray-700">
                The Trezor.io/start Version v25.2.2 includes advanced security protocols to protect your 
                digital assets from unauthorized access and potential threats.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-2 border-green-800 pb-2">Step-by-Step Setup Process</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-green-800">Visit Trezor.io/start</h3>
                <p className="text-gray-700 mt-2">
                  Begin your setup by navigating to the official Trezor.io/start website. This ensures you're 
                  using the authentic Version v25.2.2 software, protecting you from potential phishing attempts.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-green-800">Download Trezor Suite</h3>
                <p className="text-gray-700 mt-2">
                  From Trezor.io/start, download the Trezor Suite application (Version v25.2.2). This comprehensive 
                  software will guide you through the initialization process.
                </p>
                <ul className="list-disc ml-6 mt-3 text-gray-700">
                  <li>Verify the download is from the official Trezor.io/start website</li>
                  <li>Check that you're installing Version v25.2.2 for the latest features</li>
                  <li>Available for Windows, macOS, and Linux operating systems</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-green-800">Connect Your Device</h3>
                <p className="text-gray-700 mt-2">
                  Connect your Trezor device to your computer using the provided USB cable. The Trezor.io/start 
                  Version v25.2.2 software will automatically detect your device.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-green-800">Follow On-Screen Instructions</h3>
                <p className="text-gray-700 mt-2">
                  The Trezor.io/start wizard will guide you through:
                </p>
                <ul className="list-disc ml-6 mt-3 text-gray-700">
                  <li>Firmware installation (Version v25.2.2)</li>
                  <li>Creating a new wallet or recovering an existing one</li>
                  <li>Setting up your recovery seed and PIN</li>
                  <li>Verifying your device is genuine</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-2 border-green-800 pb-2">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-800 flex items-center">
                <ChevronRight className="h-5 w-5 mr-2" />
                What's new in Trezor.io/start Version v25.2.2?
              </h3>
              <p className="mt-2 text-gray-700 pl-7">
                Version v25.2.2 of Trezor.io/start includes enhanced security features, improved user interface, 
                support for additional cryptocurrencies, and faster transaction processing.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-green-800 flex items-center">
                <ChevronRight className="h-5 w-5 mr-2" />
                Is Trezor.io/start the only way to set up my device?
              </h3>
              <p className="mt-2 text-gray-700 pl-7">
                Yes, Trezor.io/start is the official and recommended method for setting up your Trezor device. 
                Using Version v25.2.2 ensures you have the most secure and up-to-date experience.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-green-800 flex items-center">
                <ChevronRight className="h-5 w-5 mr-2" />
                How long does the Trezor.io/start setup take?
              </h3>
              <p className="mt-2 text-gray-700 pl-7">
                The complete setup process through Trezor.io/start Version v25.2.2 typically takes 15-20 minutes, 
                including firmware installation and security setup.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-2 border-green-800 pb-2">Why Trezor.io/start Matters</h2>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            Using Trezor.io/start Version v25.2.2 is crucial for ensuring the security and functionality of your 
            Trezor hardware wallet. This official setup process verifies your device's authenticity, installs the 
            latest firmware, and guides you through proper security practices.
          </p>
          
          <div className="bg-green-800 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Security Reminder</h3>
            <p>
              Always access Trezor.io/start directly through the official website. Never click on links from 
              emails or search results claiming to be Trezor.io/start. Version v25.2.2 includes enhanced 
              phishing protection to help identify authentic Trezor websites.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;