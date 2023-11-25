import React from 'react';
import CostCalculator from '../components/CostCalculator';

const ResultPage: React.FC = () => {
  // TODO: Get data from route
  const data = {};

  return (
    <div>
      <h1>Cost Breakdown</h1>
      <CostCalculator data={data} />
    </div>
  );
};

export default ResultPage;