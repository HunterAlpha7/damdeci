'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ReportError() {
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

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                    {/* Error Icon */}
                    <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>

                    {/* Error Message */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Error</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Unable to generate damage report. The uploaded images do not match the required format.
                    </p>

                    {/* Error Details */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Please ensure:</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                All uploaded images have the same numeric prefix (0, 1, or 2)
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                Image names follow the pattern: [prefix]_front, [prefix]_rear, [prefix]_left, [prefix]_right
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                Example: 0_front.jpg, 0_rear.jpg, 0_left.jpg, 0_right.jpg
                            </li>
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-4">
                        <Link
                            href="/dashboard"
                            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
                        >
                            Try Again
                        </Link>
                        <Link
                            href="/"
                            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                        >
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
