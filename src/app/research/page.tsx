export default function Research() {
  return (
    <div className="pt-24 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Our Research Focus</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-300 leading-relaxed">
            At our lab, we explore the fascinating world of functional materials and their thin films for next-generation electronic devices. Our research focuses on understanding and engineering electronic-grade materials and interfaces between diverse functional thin films, including semiconductors, and dielectrics.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We specialize in the design, processing, and integration of these materials, spanning from solution-processed ultrathin films to P-N Diodes synthesized via Different techniques. Our work extends to fabricating and optimizing thin film transistors,high-k dielectrics for technological devices, for advanced technological applications. Through our research, we aim to push the boundaries of electronic materials and device innovation.
          </p>
        </div>

        <section className="research-section mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Metal Oxide Semiconductor Device Physics</h2>
          <p className="text-gray-300">Exploring the physics and instability mechanisms of metal oxide semiconductors.</p>
        </section>

        <section className="research-section mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Cost-Effective Semiconductor Devices</h2>
          <p className="text-gray-300">Developing cost-effective semiconductor devices, including TFTs and PN-Diodes.</p>
        </section>

        <section className="research-section mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Semiconductor TFT Fabrication and Design</h2>
          <p className="text-gray-300">Optimizing fabrication processes for n- or p-type semiconductor TFTs to achieve excellent device-to-device uniformity, bias/temperature stability, and reliability (run to run).</p>
          <p className="text-gray-300">Developing n-type and p-type semiconductors for complementary metal-oxide-semiconductor (CMOS) TFT/Inverters.</p>
          <p className="text-gray-300">Designing robust, flexible TFT and circuits for AMOLED displays.</p>
        </section>

        <p className="text-gray-300">
          For more detailed information on our research, please refer to our <a href="/publications" className="text-blue-400 hover:underline">publications</a> page or contact us directly.
        </p>
      </div>
    </div>
  );
} 