'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [images, setImages] = useState({
    front: null,
    rear: null,
    left: null,
    right: null
  });
  const [previews, setPreviews] = useState({
    front: null,
    rear: null,
    left: null,
    right: null
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const angles = ['front', 'rear', 'left', 'right'];

  const handleImageUpload = (e, angle) => {
    const file = e.target.files[0];
    if (file) {
      setImages(prev => ({ ...prev, [angle]: file }));

      // Revoke old object URL to avoid memory leaks
      if (previews[angle]) {
        URL.revokeObjectURL(previews[angle]);
      }

      const objectUrl = URL.createObjectURL(file);
      setPreviews(prev => ({ ...prev, [angle]: objectUrl }));
    }
  };

  const handleSubmit = () => {
    // Check if at least one image is uploaded
    if (!hasAtLeastOneImage) return;

    // Simulating processing
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);

      // Determine the report ID based on the filename prefix
      let targetReportId = 'error'; // Default to error page

      const uploadedFiles = Object.values(images).filter(file => file !== null);

      if (uploadedFiles.length > 0) {
        const firstFilename = uploadedFiles[0].name;
        // Extract the prefix from the first file
        const prefix = firstFilename.charAt(0);

        // Check if this prefix is valid (0, 1, or 2)
        if (['0', '1', '2'].includes(prefix)) {
          // Verify ALL other files share this prefix
          const allMatch = uploadedFiles.every(file => file.name.startsWith(prefix));

          if (allMatch) {
            targetReportId = prefix;
          }
        }
      }

      router.push(`/report/${targetReportId}`);
    }, 3000);
  };

  const hasAtLeastOneImage = Object.values(images).some(img => img !== null);

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
            Upload images of your vehicle from different angles to analyze damages.
          </p>
        </div>

        {/* Image Upload Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {angles.map((angle) => (
            <div
              key={angle}
              className="bg-white rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-400 transition-colors p-4 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group"
            >
              {previews[angle] ? (
                <>
                  <div className="relative w-full h-full flex-grow mb-4">
                    <Image
                      src={previews[angle]}
                      alt={`${angle} preview`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-medium">Click to Change</p>
                  </div>
                </>
              ) : (
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-50 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 capitalize mb-2">{angle === 'rear' ? 'Back' : angle === 'right' ? 'Right Side' : angle === 'left' ? 'Left Side' : 'Front'} View</h3>
                  <p className="text-sm text-gray-500">Click to upload image</p>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, angle)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-label={`Upload ${angle} image`}
              />
              {/* Label at bottom if image exists, or handled by the preview */}
              {previews[angle] && (
                <p className="text-sm font-semibold text-gray-700 capitalize mt-2 absolute bottom-4 bg-white px-3 py-1 rounded shadow-sm">
                  {angle === 'rear' ? 'Back' : angle}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleSubmit}
              disabled={!hasAtLeastOneImage || isProcessing}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Images...
                </div>
              ) : (
                'Analyze with AI'
              )}
            </button>

            <a
              href="https://drive.google.com/drive/folders/1Z2oRB4Fzv-smJJXTqde_L7f-LVvVxC4c?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Sample Images for Testing
            </a>
          </div>
          {!hasAtLeastOneImage && (
            <p className="mt-2 text-sm text-gray-500">Please upload at least one image to proceed.</p>
          )}
        </div>
      </div>
    </div>
  );
}
