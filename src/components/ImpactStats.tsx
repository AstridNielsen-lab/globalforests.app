import React from 'react';

export const ImpactStats = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Impact Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-4xl font-bold text-green-600">10,000+</p>
          <p className="text-gray-600">Trees Planted</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-green-600">500t</p>
          <p className="text-gray-600">CO₂ Reduced</p>
        </div>
      </div>
    </div>
  );
};