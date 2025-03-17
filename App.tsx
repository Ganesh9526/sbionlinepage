import React, { useState } from 'react';
import { IndianRupee, User, FileText, CreditCard, LogOut, Menu, X, Facebook, Twitter, Youtube, Linkedin, Instagram, Phone, MessageCircle } from 'lucide-react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import AccountSummary from './components/AccountSummary';
import AccountStatement from './components/AccountStatement';
import ProfilePage from './components/ProfilePage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('english');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('summary');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  const TopBar = () => (
    <div className="bg-gray-100 py-1">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-green-600">Services</a>
          <a href="#" className="hover:text-green-600">FAQ</a>
          <a href="#" className="hover:text-green-600">Corporate Website</a>
          <a href="#" className="hover:text-green-600">SBIPay Lite</a>
          <a href="#" className="hover:text-green-600">Donations</a>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLanguage(language === 'english' ? 'hindi' : 'english')}
            className="text-sm font-medium hover:text-green-600"
          >
            {language === 'english' ? 'हिंदी' : 'English'}
          </button>
          <div className="flex space-x-2">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-600" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
            <Youtube className="w-4 h-4 cursor-pointer hover:text-red-600" />
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-700" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-pink-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const Header = () => (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://bank.sbi/o/SBI-Theme/images/custom/logo.png"
              alt="SBI Logo"
              className="h-8"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-green-600" />
            <span className="text-sm">1800 11 2211</span>
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm">Contact Us</span>
          </div>
        </div>
      </div>
    </header>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onLoginClick={() => setCurrentPage('login')} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'summary':
        return <AccountSummary />;
      case 'statement':
        return <AccountStatement />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <LandingPage onLoginClick={() => setCurrentPage('login')} />;
    }
  };

  if (!isLoggedIn && currentPage !== 'landing' && currentPage !== 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />
      
      {isLoggedIn && (
        <nav className="bg-green-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="font-bold text-xl">SBI Online</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setCurrentPage('summary')}
                    className="flex items-center px-3 py-2 rounded-md hover:bg-green-600"
                  >
                    <IndianRupee className="w-4 h-4 mr-2" />
                    Account Summary
                  </button>
                  <button
                    onClick={() => setCurrentPage('statement')}
                    className="flex items-center px-3 py-2 rounded-md hover:bg-green-600"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Statement
                  </button>
                  <button
                    onClick={() => setCurrentPage('profile')}
                    className="flex items-center px-3 py-2 rounded-md hover:bg-green-600"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-3 py-2 rounded-md hover:bg-green-600"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-600"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button
                  onClick={() => {
                    setCurrentPage('summary');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-green-600"
                >
                  <IndianRupee className="w-4 h-4 mr-2" />
                  Account Summary
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('statement');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-green-600"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Statement
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('profile');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-green-600"
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-green-600"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Security Alert Banner */}
      {!isLoggedIn && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">
                SBI never asks for confidential information such as PIN and OTP from customers. Any such call can be made only by a fraudster. Please do not share personal info.
              </p>
            </div>
          </div>
        </div>
      )}

      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">Home</a></li>
                <li><a href="#" className="hover:text-green-400">Sitemap</a></li>
                <li><a href="#" className="hover:text-green-400">Disclaimer</a></li>
                <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Related Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">SBI Corporate</a></li>
                <li><a href="#" className="hover:text-green-400">SBI Mutual Fund</a></li>
                <li><a href="#" className="hover:text-green-400">SBI Cards</a></li>
                <li><a href="#" className="hover:text-green-400">SBI Life Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-400">Complaints</a></li>
                <li><a href="#" className="hover:text-green-400">Security Tips</a></li>
                <li><a href="#" className="hover:text-green-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                <Twitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                <Youtube className="w-6 h-6 cursor-pointer hover:text-red-400" />
                <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-400" />
              </div>
              <div className="mt-4">
                <p className="text-sm">24x7 Customer Care</p>
                <p className="text-lg font-semibold">1800 11 2211</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} State Bank of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;