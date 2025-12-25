'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Report1() {
    const report = {
        overallSeverity: 60.5,
        totalDamages: 4,
        estimatedRepairCost: "৳60,000 - ৳90,000 BDT",
        timeline: "5-10 business days",
        damages: [
            {
                part: "Left Rear Quarter Panel",
                severity: 90,
                type: "Crumpled, Dent + Deep Scrapes",
                description: "Severe crumpling with deep scrapes and dents",
                repairEstimate: "৳25,000 - ৳35,000",
                priority: "High"
            },
            {
                part: "Left Rear Door",
                severity: 85,
                type: "Dent + Deep Scrapes/Gouges",
                description: "Significant dents with deep scrapes and gouges",
                repairEstimate: "৳20,000 - ৳30,000",
                priority: "High"
            },
            {
                part: "Left Rear Wheel/Tire",
                severity: 80,
                type: "Flat Tire + Scuffed Rim",
                description: "Flat tire with scuffed rim requiring replacement",
                repairEstimate: "৳10,000 - ৳15,000",
                priority: "High"
            },
            {
                part: "Front Bumper",
                severity: 50,
                type: "Scrapes + Paint Peeling",
                description: "Front bumper with scrapes and paint peeling",
                repairEstimate: "৳5,000 - ৳10,000",
                priority: "Medium"
            }
        ]
    };

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
                        <div className="flex items-center gap-2">
                            <Image src="/logo.svg" alt="AutoTraceAI Logo" width={32} height={32} className="h-8 w-auto" />
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

                {/* Visual Damage Mapping */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Visual Damage Mapping</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Front View */}
                        <div className="relative">
                            <div className="border-2 border-gray-200 rounded-lg overflow-hidden mb-2 h-48 flex items-center justify-center bg-gray-50">
                                <img
                                    src="/report_images/1/front_damage.jpg"
                                    alt="Front View"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold text-gray-700">Front</p>
                                <p className="text-xs text-gray-500">Front view analysis</p>
                            </div>
                        </div>

                        {/* Rear View */}
                        <div className="relative">
                            <div className="border-2 border-gray-200 rounded-lg overflow-hidden mb-2 h-48 flex items-center justify-center bg-gray-50">
                                <img
                                    src="/report_images/1/rear_damage.jpg"
                                    alt="Rear View"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold text-gray-700">Rear</p>
                                <p className="text-xs text-gray-500">Rear view analysis</p>
                            </div>
                        </div>

                        {/* Left View */}
                        <div className="relative">
                            <div className="border-2 border-gray-200 rounded-lg overflow-hidden mb-2 h-48 flex items-center justify-center bg-gray-50">
                                <img
                                    src="/report_images/1/left_damage.jpg"
                                    alt="Left View"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold text-gray-700">Left</p>
                                <p className="text-xs text-gray-500">Left view analysis</p>
                            </div>
                        </div>

                        {/* Right View */}
                        <div className="relative">
                            <div className="border-2 border-gray-200 rounded-lg overflow-hidden mb-2 h-48 flex items-center justify-center bg-gray-50">
                                <img
                                    src="/report_images/1/right_damage.jpg"
                                    alt="Right View"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold text-gray-700">Right</p>
                                <p className="text-xs text-gray-500">Right view analysis</p>
                            </div>
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
