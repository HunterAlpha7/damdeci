'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [selectedSet, setSelectedSet] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const carSets = [
    {
      id: 1,
      name: "Sedan - Minor Damage",
      description: "Honda Civic with minor scratches and dents",
      manufacturer: "Honda",
      images: {
        front: "/damaged_cars/1/front.jpg",
        rear: "/damaged_cars/1/rear.jpg", 
        left: "/damaged_cars/1/left.jpg",
        right: "/damaged_cars/1/right.jpg"
      }
    },
    {
      id: 2,
      name: "SUV - Moderate Damage",
      description: "Toyota RAV4 with moderate body damage",
      manufacturer: "Toyota",
      images: {
        front: "/damaged_cars/2/front.jpg",
        rear: "/damaged_cars/2/rear.jpg",
        left: "/damaged_cars/2/left.jpg", 
        right: "/damaged_cars/2/right.jpg"
      }
    },
    {
      id: 3,
      name: "Truck - Heavy Damage",
      description: "Ford F-150 with significant collision damage",
      manufacturer: "Ford",
      images: {
        front: "/damaged_cars/3/front.jpg",
        rear: "/damaged_cars/3/rear.jpg",
        left: "/damaged_cars/3/left.jpg",
        right: "/damaged_cars/3/right.jpg"
      }
    },
    {
      id: 4,
      name: "Luxury Car - Cosmetic Damage",
      description: "BMW 3 Series with cosmetic imperfections",
      manufacturer: "BMW",
      images: {
        front: "/damaged_cars/4/front.jpg",
        rear: "/damaged_cars/4/rear.jpg",
        left: "/damaged_cars/4/left.jpg",
        right: "/damaged_cars/4/right.jpg"
      }
    }
  ];

  const handleSetSelection = (setId) => {
    setSelectedSet(setId);
  };

  const handleSubmit = () => {
    if (!selectedSet) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing and redirect directly to report
    setTimeout(() => {
      setIsProcessing(false);
      router.push(`/report/${selectedSet}`);
    }, 3000);
  };

  const selectedCarSet = carSets.find(set => set.id === selectedSet);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">AutoTraceAI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, User</span>
              <Link 
                href="/" 
                className="text-gray-600 hover:text-indigo-600"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Car Damage Assessment</h1>
          <p className="text-lg text-gray-600">
            Select a car set to analyze with our AI-powered damage detection system
          </p>
        </div>

        {/* Car Set Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {carSets.map((carSet) => (
            <div
              key={carSet.id}
              onClick={() => handleSetSelection(carSet.id)}
              className={`cursor-pointer rounded-lg border-2 p-6 transition-all ${
                selectedSet === carSet.id
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center border border-gray-200">
                  <Image 
                    src={`/logo${carSet.id}.png`}
                    alt={`${carSet.manufacturer} logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{carSet.name}</h3>
                <p className="text-xs text-indigo-600 font-medium mb-2">{carSet.manufacturer}</p>
                <p className="text-sm text-gray-600">{carSet.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview */}
        {selectedCarSet && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Car Images Preview</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(selectedCarSet.images).map(([angle, imagePath]) => (
                <div key={angle} className="text-center">
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700 capitalize">{angle}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={!selectedSet || isProcessing}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isProcessing ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing with AI...
              </div>
            ) : (
              'Analyze with AI'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
