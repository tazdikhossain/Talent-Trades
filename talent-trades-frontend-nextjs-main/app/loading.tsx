import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      <div className="ml-4 text-xl font-semibold text-gray-900">Loading...</div>
    </div>
  );
}
