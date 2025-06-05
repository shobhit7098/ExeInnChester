import React from "react";

const VisitUs = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Mobile Footer (Call Button) - Only visible below md */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-green-600 text-white py-4 text-center z-50">
        <a href="tel: +1 (803) 581-2525" className="text-lg font-semibold">
          📞 Call Us Now
        </a>
      </div>

      {/* Desktop Footer - Hidden on small screens */}
      <div className="hidden md:block">
        {/* Upper Footer */}
        <div className="bg-[#222] text-white py-6">
          <div className="max-w-screen-xl mx-auto text-center">
            {/* Add any content here */}
          </div>
        </div>

        {/* Lower Footer */}
        <div className="bg-[#1a1a1a] text-gray-300 py-2">
          <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-xs">
              &copy; {currentYear} Executive Inn Chester
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default VisitUs;
