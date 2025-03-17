# sbionlinepage
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
import React, { useState, useEffect } from 'react';
import { User, Lock } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface LoginPageProps {
  onLogin: () => void;
}

interface UserAccount {
  username: string;
  password: string;
  accounts: {
    type: string;
    number: string;
    balance: number;
  }[];
  cards: {
    type: string;
    number: string;
    expiryDate: string;
    cvv: string;
  }[];
}

const generateAccountNumber = () => {
  return `${Math.floor(Math.random() * 9000 + 1000)} ${Math.floor(Math.random() * 9000 + 1000)} ${Math.floor(Math.random() * 9000 + 1000)} ${Math.floor(Math.random() * 9000 + 1000)}`;
};

const generateCardNumber = () => {
  return `${Math.floor(Math.random() * 9000 + 1000)} ${Math.floor(Math.random() * 9000 + 1000)} ${Math.floor(Math.random() * 9000 + 1000)} ${Math.floor(Math.random() * 9000 + 1000)}`;
};

const generateExpiryDate = () => {
  const currentYear = new Date().getFullYear();
  const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0');
  const year = (currentYear + Math.floor(Math.random() * 5 + 1)).toString().slice(-2);
  return `${month}/${year}`;
};

const generateCVV = () => {
  return Math.floor(Math.random() * 900 + 100).toString();
};

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Load saved credentials
    const savedUsername = localStorage.getItem('sbi_username');
    const savedPassword = localStorage.getItem('sbi_password');
    const savedRememberMe = localStorage.getItem('sbi_remember_me') === 'true';

    if (savedRememberMe && savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login
      const users = JSON.parse(localStorage.getItem('sbi_users') || '[]');
      const user = users.find((u: UserAccount) => u.username === username && u.password === password);

      if (user) {
        if (rememberMe) {
          localStorage.setItem('sbi_username', username);
          localStorage.setItem('sbi_password', password);
          localStorage.setItem('sbi_remember_me', 'true');
        } else {
          localStorage.removeItem('sbi_username');
          localStorage.removeItem('sbi_password');
          localStorage.removeItem('sbi_remember_me');
        }
        localStorage.setItem('sbi_current_user', JSON.stringify(user));
        onLogin();
      } else {
        alert('Invalid credentials');
      }
    } else {
      // Handle registration
      const users = JSON.parse(localStorage.getItem('sbi_users') || '[]');
      
      if (users.some((u: UserAccount) => u.username === username)) {
        alert('Username already exists');
        return;
      }

      const newUser: UserAccount = {
        username,
        password,
        accounts: [
          {
            type: 'Savings Account',
            number: generateAccountNumber(),
            balance: 10000,
          },
          {
            type: 'Current Account',
            number: generateAccountNumber(),
            balance: 25000,
          }
        ],
        cards: [
          {
            type: 'Credit Card',
            number: generateCardNumber(),
            expiryDate: generateExpiryDate(),
            cvv: generateCVV(),
          },
          {
            type: 'Debit Card',
            number: generateCardNumber(),
            expiryDate: generateExpiryDate(),
            cvv: generateCVV(),
          }
        ]
      };

      users.push(newUser);
      localStorage.setItem('sbi_users', JSON.stringify(users));
      localStorage.setItem('sbi_current_user', JSON.stringify(newUser));

      if (rememberMe) {
        localStorage.setItem('sbi_username', username);
        localStorage.setItem('sbi_password', password);
        localStorage.setItem('sbi_remember_me', 'true');
      }

      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Login to Your Account' : 'Create New Account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              {isLogin && (
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-green-600 hover:text-green-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {isLogin ? 'Sign in' : 'Sign up'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                {isLogin ? 'Create new account' : 'Sign in to existing account'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
