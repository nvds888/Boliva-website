'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const images = [
    '/bolivia/1.jpg',
    '/bolivia/2.jpg',
    '/bolivia/3.jpg',
    '/bolivia/4.jpg',
    '/bolivia/5.jpg',
    '/bolivia/6.jpg',
    '/bolivia/7.jpg',
    '/bolivia/IMG_5546.jpg',
    '/bolivia/IMG_5553.jpg',
    '/bolivia/IMG_5555.jpg',
    '/bolivia/IMG_5557.jpg',
    '/bolivia/IMG_5560.jpg',
    '/bolivia/IMG_5561.jpg',
    '/bolivia/IMG_5562.jpg',
    '/bolivia/IMG_5564.jpg',
    '/bolivia/IMG_5573.jpg',
    '/bolivia/IMG_5590.jpg',
    '/bolivia/IMG_5592.jpg',
    '/bolivia/IMG_5593.jpg',
    '/bolivia/IMG_5596.jpg',
    '/bolivia/IMG_5597.jpg',
    '/bolivia/IMG_5598.jpg',
    '/bolivia/IMG_5606.jpg',
    '/bolivia/IMG_5610.jpg',
    '/bolivia/IMG_5611.jpg',
    '/bolivia/IMG_5612.jpg',
    '/bolivia/IMG_5615.jpg',
    '/bolivia/IMG_5617.jpg',
    '/bolivia/IMG_5618.jpg',
    '/bolivia/IMG_5621.jpg',
    '/bolivia/IMG_5625.jpg',
    '/bolivia/IMG_5627.jpg',
    '/bolivia/IMG_5628.jpg',
    '/bolivia/IMG_5629.jpg',
    '/bolivia/IMG_5631.jpg',
    '/bolivia/IMG_5632.jpg',
    '/bolivia/IMG_5633.jpg',
    '/bolivia/IMG_5634.jpg',
    '/bolivia/IMG_5635.jpg',
    '/bolivia/IMG_5640.jpg',
    '/bolivia/IMG_5650.jpg',
    '/bolivia/IMG_5651.jpg',
    '/bolivia/IMG_5652.jpg',
    '/bolivia/IMG_5667.jpg',
    '/bolivia/IMG_5669.jpg',
    '/bolivia/IMG_5672.jpg',
    '/bolivia/IMG_5673.jpg',
    '/bolivia/IMG_5675.jpg',
    '/bolivia/IMG_5677.jpg',
    '/bolivia/IMG_5682.jpg',
    '/bolivia/IMG_5683.jpg',
    '/bolivia/IMG_5684.jpg',
    '/bolivia/IMG_5695.jpg',
    '/bolivia/IMG_5696.jpg',
    '/bolivia/IMG_5697.jpg',
    '/bolivia/IMG_5699.jpg',
    '/bolivia/IMG_5701.jpg',
    '/bolivia/IMG_5707.jpg',
    '/bolivia/IMG_5710.jpg',
    '/bolivia/IMG_5716.jpg',
    '/bolivia/IMG_5717.jpg',
    '/bolivia/IMG_5720.jpg',
    '/bolivia/IMG_5721.jpg',
    '/bolivia/IMG_5723.jpg',
    '/bolivia/IMG_5725.jpg',
    '/bolivia/IMG_5727.jpg',
    '/bolivia/IMG_5733.jpg',
    '/bolivia/IMG_5736.jpg',
    '/bolivia/IMG_5738.jpg',
    '/bolivia/IMG_5740.jpg',
    '/bolivia/IMG_5742.jpg',
    '/bolivia/IMG_5745.jpg',
    '/bolivia/IMG_5746.jpg',
    '/bolivia/IMG_5749.jpg',
    '/bolivia/IMG_5751.jpg',
    '/bolivia/IMG_5754.jpg',
    '/bolivia/IMG_5755.jpg',
    '/bolivia/IMG_5757.jpg',
    '/bolivia/IMG_5760.jpg',
    '/bolivia/IMG_5762.jpg',
    '/bolivia/IMG_5765.jpg',
    '/bolivia/IMG_5767.jpg',
    '/bolivia/IMG_5772.jpg',
    '/bolivia/IMG_5775.jpg',
    '/bolivia/IMG_5781.jpg',
    '/bolivia/IMG_5785.jpg',
    '/bolivia/IMG_5787.jpg',
    '/bolivia/IMG_5788.jpg',
    '/bolivia/IMG_5789.jpg',
    '/bolivia/IMG_5790.jpg',
    '/bolivia/IMG_5793.jpg',
    '/bolivia/IMG_5798.jpg',
    '/bolivia/IMG_5801.jpg',
    '/bolivia/IMG_5806.jpg',
    '/bolivia/IMG_5813.jpg',
    '/bolivia/IMG_5818.jpg',
    '/bolivia/IMG_5895.jpg',
    '/bolivia/IMG_5897.jpg',
    '/bolivia/IMG_5903.jpg',
    '/bolivia/IMG_5909.jpg',
    '/bolivia/IMG_5910.jpg',
];

const advertisements = [
    '/Grimgram_ad.png',
    '/grimgram_air.png'
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [currentAd, setCurrentAd] = useState(0);
  const thumbnailsToShow = 7;

  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 8000);

    return () => clearInterval(adInterval);
  }, []);

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

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') nextImage();
    if (event.key === 'ArrowLeft') previousImage();
  };

  const nextThumbnails = () => {
    setStartIndex((prevIndex) => 
      Math.min(prevIndex + thumbnailsToShow, images.length - thumbnailsToShow)
    );
  };

  const previousThumbnails = () => {
    setStartIndex((prevIndex) => 
      Math.max(prevIndex - thumbnailsToShow, 0)
    );
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            For Eline <Heart className="inline-block text-pink-500" size={32} />
          </h1>
          <p className="text-xl text-gray-600">Our Bolivian Adventure 2022</p>
        </div>

        {/* Advertisement Banner */}
        <div className="max-w-4xl mx-auto mb-8">
  <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg"> {/* Changed from h-48 to h-96 */}
    <img
      src={advertisements[currentAd]}
      alt={`Current Advertisement`}
      className="w-full h-full object-contain" /* Changed from object-cover to object-contain */
    />
  </div>
</div>

        {/* Photo Gallery */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative">
            <button 
              onClick={previousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="text-gray-800" size={24} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="text-gray-800" size={24} />
            </button>

            <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-lg overflow-hidden shadow-xl">
              <img
                src={images[currentIndex]}
                alt={`Bolivia memory ${currentIndex + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Thumbnails Navigation */}
          <div className="mt-4 relative">
            <div className="flex justify-center items-center gap-2">
              <button 
                onClick={previousThumbnails}
                className="bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all disabled:opacity-50"
                disabled={startIndex === 0}
              >
                <ChevronLeft className="text-gray-800" size={20} />
              </button>

              <div className="flex gap-2 overflow-hidden">
                {images.slice(startIndex, startIndex + thumbnailsToShow).map((img, idx) => {
                  const actualIndex = startIndex + idx;
                  return (
                    <button
                      key={actualIndex}
                      onClick={() => setCurrentIndex(actualIndex)}
                      className={`relative w-16 h-16 rounded-md overflow-hidden transition-all ${
                        actualIndex === currentIndex 
                          ? 'ring-2 ring-pink-500 ring-offset-2' 
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${actualIndex + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={nextThumbnails}
                className="bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all disabled:opacity-50"
                disabled={startIndex >= images.length - thumbnailsToShow}
              >
                <ChevronRight className="text-gray-800" size={20} />
              </button>
            </div>
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