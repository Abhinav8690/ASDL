import Link from 'next/link';
import Image from 'next/image';

export default function RavindraProfile() {
  return (
    <div className="pt-24 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="md:w-1/3">
            <Image
              src="/images/team/Images/ravindra.jpg"
              alt="Dr. Ravindra Naik Bukke"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold text-white mb-8">Dr. Ravindra Naik Bukke</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Work</h2>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Assistant Professor, School of Mechanical and Materials Engineering, Indian Institute of Technology, Mandi, India.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Mobile Display B/P Process Development Engineer, Samsung Display Co. Ltd. Suwon, South Korea (Headquarters).</li>
                <li>Senior Research Assistant, Advanced Display Research Center, Kyung Hee University, Seoul, South Korea.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Awards</h2>
              <ul className="list-disc pl-5 text-gray-300">
                <li>The Best Thesis Award for the Ph.D. thesis entitled &quot;A Study on Metal-Oxide Based High-k Dielectrics and Semiconductors for Thin-film Transistors&quot;.</li>
                <li>Outstanding Research Award from BK-21 (BK21FOUR Innovation Institute for cutting-edge AR/VR hardware technology education).</li>
                <li>Presidential Scholarship from Korean Government.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
              <h3 className="text-xl font-semibold text-white mb-2">Doctor of Engineering</h3>
              <ul className="list-disc pl-5 text-gray-300 mb-4">
                <li>Department of Information Display, Kyung Hee University, Seoul, South Korea.</li>
                <li>Thesis: A Study on Metal-Oxide Based High-k Dielectrics and Semiconductors for Thin-film Transistors</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-2">Master of Engineering</h3>
              <ul className="list-disc pl-5 text-gray-300 mb-4">
                <li>Department of Information Display, Kyung Hee University, Seoul, South Korea.</li>
                <li>Thesis: &quot;A Study on Solution-Processed Amorphous Metal Oxide and Their Applications to Thin-Film Transistors&quot;</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-2">Bachelors of Engineering</h3>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Material Science & Engineering, Indian Institute of Technology Kanpur (IITK).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Research Interest</h2>
              <ul className="list-disc pl-5 text-gray-300">
                <li>Metal oxide semiconductor device physics and instability mechanisms for the same.</li>
                <li>Development of cost-effective semiconductor devices (TFTs and PN-Diodes).</li>
                <li>n- or p-type semiconductor TFT fabrication process optimization for excellent device-to-device uniformity, bias/temperature stability, and reliability (run to run).</li>
                <li>Development of n-type and p-type semiconductors for complementary metal-oxide-semiconductor (CMOS) TFT/Inverters.</li>
                <li>Design of robust, flexible TFT and circuits for AMOLED display.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">More Info at:</h2>
              <ul className="list-disc pl-5 text-gray-300">
                <li>
                  <Link href="https://scholar.google.com/citations?user=w_ZNXlkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Google Scholar Profile
                  </Link>
                </li>
                <li>
                  <Link href="https://orcid.org/0000-0003-4842-5377" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    ORCID Profile
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 