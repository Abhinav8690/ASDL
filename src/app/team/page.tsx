"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import memberimg from '../../../public/images/team/Images/img.jpg';
import memberimg1 from '../../../public/images/team/Images/lakhan.jpg';
import memberimg2 from '../../../public/images/team/Images/gotham.jpg';
import memberimg3 from '../../../public/images/team/Images/ananay.jpg';
import memberimg4 from '../../../public/images/team/Images/Abhinav.jpg';
import memberimg5 from '../../../public/images/team/Images/Sania.jpg';
import memberimg6 from '../../../public/images/team/Images/bhavya.jpg';

export default function Team() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('View Sections');

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id: string, label: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedSection(label);
    setIsDropdownOpen(false);
  };

  const members = [
    {
      name: 'Aastha Singh',
      title: 'Ph.D. Scholar',
      interests: 'p-channel thin film transistors ',
      image: memberimg,
      googleScholar: 'https://scholar.google.com/citations?hl=en&user=fDw-mX4AAAAJ',
      Linkedin: 'https://www.linkedin.com/in/aastha-singh-278527309',

      email: 'd23179@students.iitmandi.ac.in',

    },
    {
      name: 'Lakhan Rawat',
      title: 'Mtech (R) + PhD Scholar',
      interests: 'Metal Oxide High-K Dielectric for electronics',
      image: memberimg1,
      googleScholar: '',
      Linkedin: 'https://www.linkedin.com/in/lakhan-rawat-345968298',

      email: 'dd23009@students.iitmandi.ac.in',

    },
    {
      name: 'Ananay Sharma',
      title:'Ph.D. Scholar',
      interests:'n-channel oxide thin film transistors',
      image: memberimg3,
      googleScholar: '',
      Linkedin: 'https://www.linkedin.com/in/ananay-sharma-phd-6b946a232 ',

      email: 'd24138@students.iitmandi.ac.in',

    },
  ];

  const undergrads = [
    {
      name: 'Abhinav Agarwal',
      title: 'B.Tech, Material Science and Engineering',
      interests: '',
      image: memberimg4,
      googleScholar: '',
      Linkedin: 'https://www.linkedin.com/in/abhinav-agarwal-231662209/',
      email: 'B23362@students.iitmandi.ac.in',
    },
    {
      name: 'Sania Goyal',
      title: 'B.Tech, Material Science and Engineering',
      interests: '',
      image: memberimg5,
      googleScholar: '',
      Linkedin: 'https://www.linkedin.com/in/sania-goyal-b051392a3/',
      email: 'b23385@students.iitmandi.ac.in',
    },
    {
      name: 'Bhavya Sunkari',
      title: 'B.Tech, Material Science and Engineering',
      interests: '',
      image: memberimg6,
      googleScholar: '',
      Linkedin: 'https://www.linkedin.com/in/bhavya-sunkari445 ',
      email: 'b23367@students.iitmandi.ac.in',
    }
  ];

  const alumni = [
    {
      name: 'Goutham Raj Perrumalapelli',
      title: 'Project Associate',
      interests: '3D/2D dimensional hybrid halide perovskites, organic semiconductor, optoelectronics, Semiconductor materials and devices: Fabrication and Characterization, Solar energy materials, photonic materials, Optoelectronic devices (Solar cells, Thin film transistors and Organic Light Emitting Diodes etc.)',
      image: memberimg2,
      googleScholar: 'https://scholar.google.com/citations?user=YgSU5GYAAAAJ&hl=en',
      Linkedin: 'https://www.linkedin.com/in/goutham-raj-67231b2b',
      email: 'd23179@students.iitmandi.ac.in',
    }
  ];

  return (
    <div className="pt-24 py-16 bg-black text-white">
      <div className="absolute top-26 right-4 z-20">
          <button
            onClick={handleDropdownToggle}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {selectedSection}
            <svg
              className="w-4 h-4 inline-block ml-2 -mr-1 transform transition-transform duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1">
              <a
                onClick={() => scrollToSection('current-members', 'Current Members')}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-600 cursor-pointer transition-all duration-300 hover:translate-x-1"
              >
                Current Members
              </a>
              <a
                onClick={() => scrollToSection('alumni', 'Alumni')}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-600 cursor-pointer transition-all duration-300 hover:translate-x-1"
              >
                Alumni
              </a>
            </div>
          )}
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-4xl font-bold text-white mb-8">Our Team</h1>

        

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-300 leading-relaxed">
            Our lab is composed of dedicated and talented researchers, students, and collaborators.
            Each member brings unique expertise to our interdisciplinary projects.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="back group">
            <div className="group bg-gray-800 text-white border-2 border-white rounded-lg p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="spami flex items-stretch text-center md:text-left md:mr-8 transition-transform duration-300 group-hover:scale-[0.98]">
                  <div className="w-1 bg-blue-500 h-full mr-4"></div>
                  <div className="flex-grow">
                    <h1 className="text-3xl font-bold text-white mb-4">Supervisor</h1>
                    <h3 className="text-2xl font-semibold text-gray-300 mb-4">Dr. Ravindra Naik Bukke</h3>
                    <ul className="list-none p-0">
                      <li className="mb-2">
                        <Link href="/ravindra" className="text-blue-600 hover:underline hover:text-blue-400 transition-colors duration-300">Profile</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="https://scholar.google.com/citations?user=w_ZNXlkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-400 transition-colors duration-300">
                          Google Scholar Profile
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="https://orcid.org/0000-0003-4842-5377" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-400 transition-colors duration-300">
                          ORCID Profile
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="https://smme.iitmandi.ac.in/dedicated.html?data=3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-400 transition-colors duration-300">
                          IRINS Profile
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="https://www.linkedin.com/in/ravindra-naik-bukke-7b076150/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-400 transition-colors duration-300">
                          LinkedIn
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="https://ravindrabukke.tiiny.site" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-400 transition-colors duration-300">
                          CV
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-[200px] h-[200px] flex-shrink-0">
                  <Image 
                    src="/images/team/Images/ravindra.jpg" 
                    alt="Dr. Ravindra Naik Bukke" 
                    width={200} 
                    height={200} 
                    className="rounded-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-[0.98]" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="current-members" className="text-3xl font-bold text-white mb-6">Ph.D. Scholars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {members.map((member, index) => (
            <div key={index} className="group bg-gray-800 rounded-lg shadow-md p-6 text-center border-2 border-white transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1">
              <Image src={member.image} alt={member.name} width={128} height={128} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" />
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{member.name}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{member.title}</p>
              {member.interests && <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors duration-300">Interests: {member.interests}</p>}
              <div className="mt-4 flex justify-center space-x-4">
                {member.googleScholar && (
                  <Link href={member.googleScholar} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Google Scholar
                  </Link>
                )}
                {member.Linkedin && (
                  <Link href={member.Linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    LinkedIn
                  </Link>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Email
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">Undergraduates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {undergrads.map((member, index) => (
            <div key={index} className="group bg-gray-800 rounded-lg shadow-md p-6 text-center border-2 border-white transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1">
              <Image src={member.image} alt={member.name} width={128} height={128} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" />
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{member.name}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{member.title}</p>
              {member.interests && <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors duration-300">Interests: {member.interests}</p>}
              <div className="mt-4 flex justify-center space-x-4">
                {member.googleScholar && (
                  <Link href={member.googleScholar} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Google Scholar
                  </Link>
                )}
                {member.Linkedin && (
                  <Link href={member.Linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    LinkedIn
                  </Link>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                    Email
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 id="alumni" className="text-3xl font-bold text-white mb-6">Alumni</h2>
        <div className="grid grid-cols-1 gap-8 mb-12">
          {alumni.map((member, index) => (
            <div key={index} className="group bg-white text-black border-2 border-white rounded-lg p-5 shadow-md transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1 max-w-xl mx-auto">
              <div className="flex flex-col md:flex-row items-start justify-start gap-6">
                <div className="flex-shrink-0">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={120} 
                    height={120} 
                    className="rounded-lg w-auto h-auto object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" 
                  />
                </div>
                <div className="flex-grow text-center md:text-left flex relative">
                  <div className="w-1 bg-blue-500 h-full mr-4 group-hover:bg-blue-400 transition-colors duration-300"></div>
                  <div className="pl-0 flex-grow">
                    <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                    <p className="text-gray-700 text-lg font-semibold italic mb-4 group-hover:text-gray-900 transition-colors duration-300">{member.title}</p>
                    {member.interests && (
                      <div className="mt-4">
                        <h4 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">Research Interests</h4>
                        <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{member.interests}</p>
                      </div>
                    )}
                    <div className="mt-4 flex justify-center md:justify-start space-x-4">
                      {member.googleScholar && (
                        <Link href={member.googleScholar} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                          Google Scholar
                        </Link>
                      )}
                      {member.Linkedin && (
                        <Link href={member.Linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                          LinkedIn
                        </Link>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110">
                          Email
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-300">
          Interested in joining our team? Visit our <a href="/join" className="text-blue-400 hover:text-blue-300 hover:underline transition-all duration-300 hover:scale-110 inline-block">Join Us</a> page for opportunities.
        </p>
      </div>
    </div>
  );
} 