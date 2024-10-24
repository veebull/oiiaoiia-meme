import React from 'react';
import { Button } from '@/components/ui/button';
import { connectWallet, sendTransaction } from '@/lib/tonConnectUtility';

const BuyButton: React.FC = () => {
  const handleBuy = async () => {
    const connected = await connectWallet();
    if (connected) {
      const result = await sendTransaction('EQD...', '10'); // Replace with actual recipient address and amount
      if (result) {
        alert("Transaction sent successfully!");
      } else {
        alert("Failed to send transaction.");
      }
    } else {
      alert("Failed to connect wallet.");
    }
  };

  return (
    <Button
      onClick={handleBuy}
      className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    >
      Buy OIIAOIIA Tokens
    </Button>
  );
};

export default BuyButton;
