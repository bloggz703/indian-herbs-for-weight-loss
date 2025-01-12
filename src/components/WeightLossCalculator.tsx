import React, { useState } from 'react';
import { Scale, Activity, Target } from 'lucide-react';

const WeightLossCalculator = () => {
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [result, setResult] = useState('');

  const calculatePotential = () => {
    const current = parseFloat(currentWeight);
    const target = parseFloat(targetWeight);
    
    if (current && target && current > target) {
      const activityMultiplier = {
        sedentary: 0.5,
        light: 0.75,
        active: 1
      }[activityLevel];
      
      const potentialLoss = Math.min(
        (current - target) * 0.1 * activityMultiplier,
        8
      ).toFixed(1);
      
      setResult(`With the help of our herbal remedies and dietary supplements, combined with ${activityLevel} activity and a healthy diet, you could lose weight naturally - up to ${potentialLoss} lbs in the next 4 weeks! Our weight-loss program includes various herbs and natural remedies to support your weight management goals while maintaining a healthy food intake.`);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto border border-green-100">
      <h3 className="text-2xl font-bold mb-4 text-green-800 flex items-center">
        <Scale className="mr-2 h-6 w-6" />
        See Your Weight-Loss Potential!
      </h3>
      
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-md mb-6">
        <p className="text-sm text-gray-700">
          Our calculator helps you discover how our herbal preparations and Ayurvedic treatments can support your weight-loss journey. Simply enter your current weight, target weight, and activity level to see how our botanicals and herbal treatments, combined with a healthy diet plan and proper meals, can help you achieve your goals. Our approach integrates traditional spices, medicinal properties, and fat metabolism support through natural remedies and supplements.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Current Weight (lbs)</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              value={currentWeight}
              onChange={(e) => setCurrentWeight(e.target.value)}
              className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              placeholder="Enter weight"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Scale className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Target Weight (lbs)</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="number"
              value={targetWeight}
              onChange={(e) => setTargetWeight(e.target.value)}
              className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-green-500 focus:ring-green-500 sm:text-sm"
              placeholder="Enter target"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Target className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Activity Level</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="block w-full rounded-md border-gray-300 pl-3 pr-10 focus:border-green-500 focus:ring-green-500 sm:text-sm"
            >
              <option value="sedentary">Sedentary</option>
              <option value="light">Lightly Active</option>
              <option value="active">Active</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Activity className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        <button
          onClick={calculatePotential}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-md hover:from-green-700 hover:to-green-800 transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
        >
          Calculate My Potential
        </button>
        {result && (
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-md border border-green-100">
            <p className="text-green-800">{result}</p>
            <a 
              href="https://c65f5m2860dl7w2grhqf3jfo2v.hop.clickbank.net/?&traffic_source=google&traffic_type=organic&campaign=Mill&ad=ad4"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all transform hover:-translate-y-0.5 text-center font-bold shadow-md hover:shadow-lg"
            >
              Start Your Journey Now!
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeightLossCalculator;