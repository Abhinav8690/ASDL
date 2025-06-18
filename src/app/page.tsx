"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // pixels per frame
    const scrollInterval = 30; // milliseconds per frame

    const scroll = () => {
      if (!isHovered && scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const intervalId = setInterval(scroll, scrollInterval);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <div className="pt-24 bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="w-56 h-56 flex-shrink-0">
              <Image 
                src="/images/Untitled8_page-0001.jpg" 
                alt="ASDL Logo 1" 
                width={192} 
                height={192} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center flex-grow mx-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Advanced Semiconductor and Display Lab
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 mt-12">
                Welcome to ASDL
              </p>
            </div>
            <div className="w-56 h-56 flex-shrink-0">
              <Image 
                src="/images/logo_hires.jpg" 
                alt="ASDL Logo 2" 
                width={192}
                height={192} 
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lab Background */}
      <section className="py-20 bg-white border-b-4 border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 hover:text-blue-600 transition-colors duration-300">Lab Background</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
            At ASDL, we focus on cutting-edge research in advanced display technologies and semiconductor devices. Our team is dedicated to innovation and excellence in the field of electronics and materials science.
            </p>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 hover:text-blue-600 transition-colors duration-300">Our Research Focus</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              We specialize in the design, processing, and integration of these materials, spanning from solution-processed ultrathin films to P-N Diodes synthesized via different techniques. Our work extends to fabricating and optimizing thin film transistors,high-k dielectrics, for advanced technological applications. Through our research, we aim to push the boundaries of electronic materials and device innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 hover:text-blue-400 transition-colors duration-300">Recent Highlights</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div 
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-500"
            >
              <div className="flex space-x-6 min-w-max">
                {/* Highlight Card 1 */}
                <div className="bg-gray-900 rounded-lg p-6 w-80 flex-shrink-0 transition-all duration-300 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 group">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Nature Electronics Publication</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Strain relaxation and multidentate anchoring in n-type perovskite transistors and logic circuits. Published in Nature Electronics, 2024.
                  </p>
                  <a href="/publications" className="mt-4 inline-block text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Read More →
                  </a>
                </div>

                {/* Highlight Card 2 */}
                <div className="bg-gray-900 rounded-lg p-6 w-80 flex-shrink-0 transition-all duration-300 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 group">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">High-Performance TFT Research</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Advancements in enhancing thin film quality in solution-processed dielectrics for high-performance transistors. Published in ACS Applied Electronic Materials, 2024.
                  </p>
                  <a href="/publications" className="mt-4 inline-block text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Read More →
                  </a>
                </div>

                {/* Highlight Card 3 */}
                <div className="bg-gray-900 rounded-lg p-6 w-80 flex-shrink-0 transition-all duration-300 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 group">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">International Conference</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    High-Performance of Zinc Tin Oxide Semiconductor Based Thin Film Transistors. Presented at International Conference on Advanced Materials and Startup Ecosystem, 2024.
                  </p>
                  <a href="/publications" className="mt-4 inline-block text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Read More →
                  </a>
                </div>

                {/* Highlight Card 4 */}
                <div className="bg-gray-900 rounded-lg p-6 w-80 flex-shrink-0 transition-all duration-300 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 group">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Journal Publication</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    High-performance of the p-Channel CuGaO Thin-Film Transistors. Published in Journal of Alloys and Compounds, 2024.
                  </p>
                  <a href="/publications" className="mt-4 inline-block text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Read More →
                  </a>
                </div>

                {/* Highlight Card 5 */}
                <div className="bg-gray-900 rounded-lg p-6 w-80 flex-shrink-0 transition-all duration-300 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 group">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Conference Presentation</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Solution-processed p-type CuGaO films towards thin film transistor application. Presented at ICFM-2024, IIT Kharagpur.
                  </p>
                  <a href="/publications" className="mt-4 inline-block text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Read More →
                  </a>
                </div>

                {/* Highlight Card 6 */}
                <div className="bg-gray-900 rounded-lg p-6 w-80 flex-shrink-0 transition-all duration-300 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 group">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Research Achievement</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Improvement in Bias Stability of Zinc Oxide Thin Film Transistor by Tin Doping. Presented at IDW-2023, Japan.
                  </p>
                  <a href="/publications" className="mt-4 inline-block text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Read More →
                  </a>
                </div>

                {/* Highlight Card 7 */}
                <div className="bg-gray-900 rounded-lg p-6 w-80 flex-shrink-0 transition-all duration-300 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 group">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Flexible Display Research</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Flexible La Doped ZnO TFTs and Circuits on Polyimide Substrate for Foldable Display. Presented at SID-2021.
                  </p>
                  <a href="/publications" className="mt-4 inline-block text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Read More →
                  </a>
                </div>

                {/* Highlight Card 8 */}
                <div className="bg-gray-900 rounded-lg p-6 w-80 flex-shrink-0 transition-all duration-300 hover:border-2 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 group">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Manufacturing Innovation</h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Low-Cost Manufacturing of AlZnO/ZnO Thin Film Transistor with High Mobility Over 80 cm2/Vs. Presented at SID-2021.
                  </p>
                  <a href="/publications" className="mt-4 inline-block text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Interested in Joining Our Lab?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We welcome motivated researchers for Ph.D., Master&apos;s programs, and short-term research opportunities.
          </p>
          <Link
            href="/join"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Learn More About Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
