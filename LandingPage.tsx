import React from 'react';
import { Shield, Smartphone, Clock } from 'lucide-react';

interface LandingPageProps {
  onLoginClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[500px] relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to SBI Online Banking
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Secure, convenient, and always at your service
              </p>
              <button
                onClick={onLoginClick}
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
              >
                Login to Internet Banking
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose SBI Online Banking?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Shield className="w-12 h-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Banking</h3>
            <p className="text-gray-600">
              Bank with confidence using our state-of-the-art security features
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Smartphone className="w-12 h-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Banking</h3>
            <p className="text-gray-600">
              Access your account anytime, anywhere through our mobile app
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Clock className="w-12 h-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">
              Round-the-clock banking services at your fingertips
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>Toll Free: 1800 11 2211</p>
              <p>Email: customercare@sbi.co.in</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-green-200">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-green-200">
                    Locate Branch
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-200">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Important Information</h4>
              <p className="text-sm">
                Never share your login credentials or OTP with anyone. Bank never asks
                for such information.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-600 text-center">
            <p>&copy; 2025 State Bank of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;