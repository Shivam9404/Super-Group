import React from "react";
import Image from "next/image";
import PerformancePage from "./components/PerformancePage";
import EvolvingPage from "./components/EvolvingPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

export default function Header() {
  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="flex flex-wrap items-center justify-between mt-5 px-4 sm:px-8 md:px-16 lg:px-32">
          {/* Logo */}
          <div className="w-28 sm:w-32 md:w-36 lg:w-36">
            <Image
              src="/supreme-logo.png"
              alt="Supreme Group Logo"
              width={146}
              height={41}
            />
          </div>

          {/* Button & Icons */}
          <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
            <button className="w-[120px] sm:w-[145px] h-[40px] sm:h-[50px] rounded-[100px] border border-[#00BFFF] bg-[#5CD6FF] text-sm sm:text-base px-4 sm:px-6">
              Contact Us
            </button>

            <div className="flex items-center gap-2 sm:gap-4">
              <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
              <Image src="/translate 1.png" alt="Translate" width={22} height={22} />
              <Image src="/ENG.png" alt="English" width={25} height={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="pt-[80px] sm:pt-[100px]">
        <PerformancePage />
        <EvolvingPage />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}
