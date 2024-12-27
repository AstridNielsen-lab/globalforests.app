import React, { useState } from 'react';
import { processDonation } from '../lib/services/donation';

export const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonate = async (method: 'paypal' | 'crypto') => {
    setIsProcessing(true);
    try {
      await processDonation(Number(amount), method);
      // TODO: Show success message
    } catch (error) {
      // TODO: Show error message
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="w-full p-2 border rounded mb-4"
      />
      <div className="space-y-2">
        <button
          onClick={() => handleDonate('paypal')}
          disabled={isProcessing}
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          {isProcessing ? 'Processing...' : 'Donate via PayPal'}
        </button>
        <button
          onClick={() => handleDonate('crypto')}
          disabled={isProcessing}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {isProcessing ? 'Processing...' : 'Donate via Crypto'}
        </button>
      </div>
    </div>
  );
};