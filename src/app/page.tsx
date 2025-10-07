import React from "react";
import Image from "next/image";
import PerformancePage from "./components/PerformancePage";
import EvolvingPage from "./components/EvolvingPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

export default function Header() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex items-center justify-between mt-5 mx-32">
          <Image
            src="/supreme-logo.png"
            alt="Supreme Group Logo"
            width={146}
            height={41}
          />

          <div className="flex items-center gap-4">
            <button className="w-[145px] h-[50px] rounded-[100px] border border-[#00BFFF] px-[30px] py-[10px] bg-[#5CD6FF] opacity-100">
              Contact Us
            </button>

            <Image src="/linkedin.png" alt="Logo 1" width={24} height={24} />
            <Image src="/translate 1.png" alt="Logo 2" width={22} height={22} />
            <Image src="/ENG.png" alt="Logo 3" width={25} height={16} />
          </div>
        </div>
      </div>

      <div className="pt-[100px]">
        <PerformancePage />
        <EvolvingPage />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}
