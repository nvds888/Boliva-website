"use client";

import { useState } from 'react';
import Head from 'next/head';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function Home() {
  // This array will store your image paths
  const [images] = useState([
    '/bolivia/image1.jpg',  // You'll replace these with your actual image paths
    '/bolivia/image2.jpg',
    '/bolivia/image3.jpg',
    // Add more image paths as needed
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Head>
        <title>For Eline - Bolivia 2022 ❤️</title>
        <meta name="description" content="Our memories from Bolivia" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            For Eline <Heart className="inline-block text-pink-500" size={32} />
          </h1>
          <p className="text-xl text-gray-600">Our Bolivian Adventure 2022</p>
        </div>

        {/* Photo Gallery */}
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={previousImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronLeft className="text-gray-800" size={24} />
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronRight className="text-gray-800" size={24} />
          </button>

          {/* Image Container */}
          <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-lg overflow-hidden shadow-xl">
            <img
              src={images[currentIndex]}
              alt={`Bolivia memory ${currentIndex + 1}`}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Image Counter */}
          <div className="text-center mt-4 text-gray-600">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p className="text-sm">
            Made with ❤️ for the best travel companion ever
          </p>
        </footer>
      </main>
    </div>
  );
}