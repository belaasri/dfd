import React from 'react';

const YouTubeDownloader = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">YouTube Video Downloader</h1>
      <p className="text-center text-gray-600 mb-8">download online videos, download online video to mp3 for free</p>
      
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <input
            type="text"
            placeholder="Search keywords or paste video link here"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          YouTube is the biggest YouTube video sharing platform in the world, and provide an excellent experience for users to upload, view, and share videos. What it can't provide is a YouTube video download. That is why ytld is here to help you out!
        </p>
        
        <p className="text-sm text-gray-600">
          With our YouTube video downloader, you can fastly search for your favorite YouTube videos and easily download them for free! You can download YouTube videos to MP4, YouTube Video to MP3, and other formats, with high-quality SD, HD, 1080p, and even 4K. Compatible with mac, Android, iOS, and Windows.
        </p>
      </div>
    </div>
  );
};

export default YouTubeDownloader;
