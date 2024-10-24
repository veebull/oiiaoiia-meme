import TonConnect from '@tonconnect/sdk';

const manifestUrl = 'https://your-app-domain.com/tonconnect-manifest.json';

const connector = new TonConnect({ manifestUrl });

export const connectWallet = async () => {
  try {
    const walletConnectionSource = await connector.getWallets();
    await connector.connect(walletConnectionSource[0]);
    return true;
  } catch (error) {
    console.error('Error connecting wallet:', error);
    return false;
  }
};

export const disconnectWallet = async () => {
  try {
    await connector.disconnect();
    return true;
  } catch (error) {
    console.error('Error disconnecting wallet:', error);
    return false;
  }
};

export const getWalletInfo = () => {
  const walletInfo = connector.wallet;
  return walletInfo;
};

export const sendTransaction = async (to: string, amount: string) => {
  try {
    const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + 60 * 20, // Valid for 20 minutes
      messages: [
        {
          address: to,
          amount: amount,
        },
      ],
    };

    const result = await connector.sendTransaction(transaction);
    return result;
  } catch (error) {
    console.error('Error sending transaction:', error);
    return null;
  }
};
