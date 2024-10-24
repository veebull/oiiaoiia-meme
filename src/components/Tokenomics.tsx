import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Tokenomics: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>OIIAOIIA Token Tokenomics</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className='list-disc list-inside'>
          <li>Total Supply: 1,000,000,000 OIIAOIIA</li>
          <li>
            Initial Distribution: 40% to community, 30% to liquidity pools, 20%
            to team, 10% to marketing
          </li>
          <li>Deflationary Mechanism: 2% burn on each transaction</li>
          <li>Staking Rewards: 5% APY for holders who stake their tokens</li>
          <li>
            Community Governance: Token holders can vote on future developments
            and meme contests
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Tokenomics;
