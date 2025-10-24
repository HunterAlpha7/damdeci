'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Report({ params }) {
  const resolvedParams = use(params);
  
  const reportData = {
    1: {
      carInfo: {
        make: "Ford",
        model: "Focus ZX4",
        year: "2006",
        color: "Silver"
      },
      overallSeverity: 18,
      totalDamages: 2,
      estimatedRepairCost: "$800 - $1,200",
      visualAssessment: [
        { angle: "Front", image: "/report_images/1/front_damage.jpg", description: "Minor scuff marks on front bumper" },
        { angle: "Left", image: "/report_images/1/left_damage.jpg", description: "Small scratch on driver side door" }
      ],
      damages: [
        {
          part: "Front Bumper",
          severity: 12,
          type: "Scuff Marks",
          description: "Light scuff marks from parking incident",
          repairEstimate: "$200 - $400",
          priority: "Low"
        },
        {
          part: "Driver Side Door",
          severity: 25,
          type: "Scratch",
          description: "Single scratch approximately 6 inches long",
          repairEstimate: "$600 - $800",
          priority: "Low"
        }
      ]
    },
    2: {
      carInfo: {
        make: "Ford",
        model: "Mustang",
        year: "2007",
        color: "White"
      },
      overallSeverity: 42,
      totalDamages: 4,
      estimatedRepairCost: "$2,200 - $3,200",
      visualAssessment: [
        { angle: "Front", image: "/report_images/2/front_damage.jpg", description: "Moderate damage to front grille and headlight" },
        { angle: "Rear", image: "/report_images/2/rear_damage.jpg", description: "Scratches and dent on rear bumper" },
        { angle: "Left", image: "/report_images/2/left_damage.jpg", description: "Deep scratches on driver side panel" },
        { angle: "Right", image: "/report_images/2/right_damage.jpg", description: "Minor damage on passenger side" }
      ],
      damages: [
        {
          part: "Front Grille",
          severity: 55,
          type: "Crack",
          description: "Crack in front grille extending 4 inches",
          repairEstimate: "$500 - $700",
          priority: "High"
        },
        {
          part: "Front Headlight",
          severity: 40,
          type: "Crack",
          description: "Small crack in headlight housing",
          repairEstimate: "$300 - $500",
          priority: "Medium"
        },
        {
          part: "Driver Side Panel",
          severity: 45,
          type: "Deep Scratches",
          description: "Multiple deep scratches across door panel",
          repairEstimate: "$800 - $1,200",
          priority: "High"
        },
        {
          part: "Rear Bumper",
          severity: 30,
          type: "Dent & Scratches",
          description: "Small dent with surrounding scratches",
          repairEstimate: "$600 - $800",
          priority: "Medium"
        }
      ]
    },
    3: {
      carInfo: {
        make: "Ford",
        model: "Escape SE",
        year: "2016",
        color: "Black"
      },
      overallSeverity: 78,
      totalDamages: 6,
      estimatedRepairCost: "$5,200 - $7,800",
      visualAssessment: [
        { angle: "Front", image: "/report_images/3/front_damage.jpg", description: "Severe front-end collision damage" },
        { angle: "Rear", image: "/report_images/3/rear_damage.jpg", description: "Moderate rear-end damage" },
        { angle: "Left", image: "/report_images/3/left_damage.jpg", description: "Extensive side impact damage" },
        { angle: "Right", image: "/report_images/3/right_damage.jpg", description: "Significant passenger side damage" }
      ],
      damages: [
        {
          part: "Front Hood",
          severity: 85,
          type: "Major Dent",
          description: "Large dent affecting hood structure and alignment",
          repairEstimate: "$1,500 - $2,200",
          priority: "Critical"
        },
        {
          part: "Front Bumper",
          severity: 90,
          type: "Severe Damage",
          description: "Bumper severely damaged, requires complete replacement",
          repairEstimate: "$1,800 - $2,500",
          priority: "Critical"
        },
        {
          part: "Driver Side Door",
          severity: 75,
          type: "Major Dent",
          description: "Large dent affecting door operation and alignment",
          repairEstimate: "$1,200 - $1,800",
          priority: "High"
        },
        {
          part: "Passenger Side Door",
          severity: 70,
          type: "Dent & Scratches",
          description: "Significant damage to passenger door panel",
          repairEstimate: "$1,100 - $1,600",
          priority: "High"
        },
        {
          part: "Front Headlight",
          severity: 80,
          type: "Shattered",
          description: "Headlight completely shattered, needs replacement",
          repairEstimate: "$400 - $600",
          priority: "High"
        },
        {
          part: "Side Mirror",
          severity: 65,
          type: "Broken",
          description: "Side mirror housing cracked and mirror broken",
          repairEstimate: "$300 - $500",
          priority: "Medium"
        }
      ]
    }
  };

  const report = reportData[parseInt(resolvedParams.id)] || reportData[1];
  
  // Debug logging
  console.log('Report ID:', resolvedParams.id);
  console.log('Parsed ID:', parseInt(resolvedParams.id));
  console.log('Selected Report:', report.carInfo);

  const getSeverityColor = (severity) => {
    if (severity >= 70) return 'bg-red-500';
    if (severity >= 40) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const downloadPDF = () => {
    window.print();
  };

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
              <Link 
                href="/dashboard" 
                className="text-gray-600 hover:text-indigo-600"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Report Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Damage Assessment Report</h1>
              <p className="text-lg text-gray-600">
                {report.carInfo.year} {report.carInfo.make} {report.carInfo.model} - {report.carInfo.color}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Overall Severity</div>
              <div className="text-3xl font-bold text-gray-900">{report.overallSeverity}%</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{report.totalDamages}</div>
              <div className="text-sm text-gray-600">Total Damages Found</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{report.estimatedRepairCost}</div>
              <div className="text-sm text-gray-600">Estimated Repair Cost</div>
            </div>
          </div>
        </div>


        {/* Detailed Damage Analysis */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Damage Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Car Part</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Damage Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Severity</th>
                </tr>
              </thead>
              <tbody>
                {report.damages.map((damage, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{damage.part}</div>
                      <div className="text-sm text-gray-600">{damage.description}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(damage.priority)}`}>
                        {damage.type}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getSeverityColor(damage.severity)}`}
                            style={{ width: `${damage.severity}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{damage.severity}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button 
            onClick={downloadPDF}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Download PDF Report
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Share Report
          </button>
          <Link 
            href="/dashboard"
            className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            New Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
