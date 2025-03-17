import React, { useState, useEffect } from 'react';
import { IndianRupee, ArrowUpRight, ArrowDownRight, CreditCard, QrCode, Smartphone, Send, RefreshCw } from 'lucide-react';

const AccountSummary = () => {
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [transferType, setTransferType] = useState('');
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('sbi_current_user') || '{}');
    setUserData(currentUser);
  }, []);

  const accounts = userData?.accounts || [];
  const cards = userData?.cards || [];

  const recentTransactions = [
    {
      id: 1,
      description: 'Amazon Payment',
      amount: -2500,
      date: '2025-03-15',
      type: 'debit',
    },
    {
      id: 2,
      description: 'Salary Credit',
      amount: 75000,
      date: '2025-03-01',
      type: 'credit',
    },
    {
      id: 3,
      description: 'Electricity Bill',
      amount: -1800,
      date: '2025-02-28',
      type: 'debit',
    },
  ];

  const TransferModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">
          {transferType === 'self' ? 'Self Transfer' : 'Fund Transfer'}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From Account
            </label>
            <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              {accounts.map((account: any, index: number) => (
                <option key={index} value={account.number}>
                  {account.type} - {account.number}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To Account
            </label>
            {transferType === 'self' ? (
              <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                {accounts.map((account: any, index: number) => (
                  <option key={index} value={account.number}>
                    {account.type} - {account.number}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                placeholder="Enter account number"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            )}
          </div>
          {transferType === 'other' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                IFSC Code
              </label>
              <input
                type="text"
                placeholder="Enter IFSC code"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Remarks
            </label>
            <input
              type="text"
              placeholder="Enter remarks"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={() => {
              setShowTransferModal(false);
              setTransferType('');
            }}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
            Transfer
          </button>
        </div>
      </div>
    </div>
  );

  const QRModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Pay Using QR Code</h3>
        <div className="space-y-6">
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt="QR Code"
              className="w-48 h-48"
            />
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Scan this QR code using any UPI app
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png"
                alt="PhonePe"
                className="h-8"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png"
                alt="Google Pay"
                className="h-8"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1200px-Paytm_Logo_%28standalone%29.svg.png"
                alt="Paytm"
                className="h-8"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setShowQRModal(false)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Account Summary</h1>

      {/* Account Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {accounts.map((account: any, index: number) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{account.type}</h3>
              <CreditCard className="text-green-600 w-6 h-6" />
            </div>
            <p className="text-gray-600 mb-2">Account Number: {account.number}</p>
            <p className="text-2xl font-bold text-green-600">₹{account.balance.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Cards</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card: any, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-lg shadow-md text-white"
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-lg font-semibold">{card.type}</h3>
                <CreditCard className="w-8 h-8" />
              </div>
              <p className="text-2xl mb-4 font-mono">{card.number}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs opacity-75">Expires</p>
                  <p>{card.expiryDate}</p>
                </div>
                <div>
                  <p className="text-xs opacity-75">CVV</p>
                  <p>{card.cvv}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <button
          onClick={() => {
            setTransferType('other');
            setShowTransferModal(true);
          }}
          className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50"
        >
          <Send className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <span className="block text-sm text-center">Fund Transfer</span>
        </button>
        <button
          onClick={() => {
            setTransferType('self');
            setShowTransferModal(true);
          }}
          className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50"
        >
          <RefreshCw className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <span className="block text-sm text-center">Self Transfer</span>
        </button>
        <button
          onClick={() => setShowQRModal(true)}
          className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50"
        >
          <QrCode className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <span className="block text-sm text-center">Scan & Pay</span>
        </button>
        <button className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50">
          <Smartphone className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <span className="block text-sm text-center">UPI Payment</span>
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="p-6 flex items-center justify-between">
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <div
                className={`font-semibold ${
                  transaction.type === 'credit'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {transaction.type === 'credit' ? '+' : '-'} ₹
                {Math.abs(transaction.amount).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showTransferModal && <TransferModal />}
      {showQRModal && <QRModal />}
    </div>
  );
};

export default AccountSummary;