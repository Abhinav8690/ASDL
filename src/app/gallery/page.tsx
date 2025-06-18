"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const equipmentImages = [
    "Screenshot 2025-06-04 151358.png",
    "Screenshot 2025-06-04 151332.png",
    "Screenshot 2025-06-04 151308.png",
    "Screenshot 2025-06-04 151247.png",
    "Screenshot 2025-06-04 151222.png",
    "Screenshot 2025-06-04 151141.png",
    "Screenshot 2025-06-04 151110.png",
    "Screenshot 2025-06-04 151044.png",
    "Screenshot 2025-06-04 151019.png",
    "Screenshot 2025-06-04 150949.png",
    "Screenshot 2025-06-04 150922.png",
  ];

  return (
    <div className="pt-24 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Gallery</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-300 leading-relaxed">
            Explore various images from our lab, including facilities, research in progress, and team activities.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">Lab Equipment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {equipmentImages.map((imageName, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-md border-2 border-white transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] relative"
              onMouseEnter={() => setHoveredImage(imageName)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image 
                src={`/images/equipments/${imageName}`} 
                alt={`Lab Equipment ${index + 1}`} 
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[0.98]" 
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-white">Equipment {index + 1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Position Image Popup Modal */}
        {hoveredImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 pointer-events-none">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-blue-400 max-w-[90vw] max-h-[90vh]">
              <Image
                src={`/images/equipments/${hoveredImage}`}
                alt="Enlarged Equipment"
                width={800}
                height={600}
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}

        <p className="text-gray-300">
          We regularly update our gallery with new photos. Check back soon for more exciting visuals from the lab!
        </p>
      </div>
    </div>
  );
} 