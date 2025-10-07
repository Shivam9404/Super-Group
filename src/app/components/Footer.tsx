"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-[75vh] bg-gradient-to-t from-[#d7e9f8] via-[#eff6fc] to-white text-gray-800 flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex-1 flex flex-col justify-center px-50">
        {/* Row 1: Logo */}
        <div className="flex justify-center md:justify-start mb-10">
          <Image
            src="/supreme-logo.png"
            alt="Supreme Group Logo"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Row 2: Footer Columns */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          {/* Applications */}
          <div>
            <h4 className="font-semibold mb-3 text-black tracking-wide">
              APPLICATIONS
            </h4>
            <ul className="space-y-5 text-[15px] leading-relaxed">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Nonwoven</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-black tracking-wide">
              COMPANY
            </h4>
            <ul className="space-y-5 text-[15px] leading-relaxed">
              <li>Who We Are</li>
              <li>Global Competency</li>
              <li>Innovation</li>
              <li>ESG Impact</li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold mb-3 text-black tracking-wide">MORE</h4>
            <ul className="space-y-5 text-[15px] leading-relaxed">
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-3 text-black tracking-wide">
              FOLLOW US
            </h4>
            <ul className="space-y-5 text-[15px] leading-relaxed">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-50 pb-6 flex flex-col md:flex-row justify-between text-[14px] text-gray-700">
        <p>©2024. All Rights Reserved.</p>
        <p>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
      </div>
    </footer>
  );
}
