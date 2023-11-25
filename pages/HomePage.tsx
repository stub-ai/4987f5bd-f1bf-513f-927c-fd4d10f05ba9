import React from 'react';
import ParcelForm from '../components/ParcelForm';

const HomePage: React.FC = () => {
  const handleSubmit = (data: any) => {
    // TODO: Redirect to ResultPage with data
  };

  return (
    <div>
      <h1>Logistics Expense Calculator</h1>
      <ParcelForm onSubmit={handleSubmit} />
    </div>
  );
};

export default HomePage;