const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ADVANCED SEMICONDUCTOR AND DISPLAY LAB</h3>
            <p className="text-gray-300">
              Materials Department,SMME, IIT MANDI, MANDI 175001, H.P., India
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-300">
              Created & Maintained by <span className="font-semibold">ASDL</span>
            </p>
            <p className="text-gray-400 mt-2">
              © {new Date().getFullYear()} IIT Lab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 