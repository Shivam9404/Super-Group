"use client";
import { useEffect, useRef, useState } from "react";

interface Thumbnail {
  id: number;
  url: string;
  imageUrl: string;
}

export default function EvolvingPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Section 2 main video state
  const [passengerMainVideo, setPassengerMainVideo] = useState("/passenger_main.mp4");
  const passengerThumbnails: Thumbnail[] = [
    { id: 1, url: "/passenger_main.mp4", imageUrl: "/completeBody.png" },
    { id: 2, url: "/front_v.mp4", imageUrl: "/front.png" },
    { id: 3, url: "/cabin_v.mp4", imageUrl: "/cabin.png" },
    { id: 4, url: "/trunk_v.mp4", imageUrl: "/trunk.png" },
    { id: 5, url: "/exterior_v.mp4", imageUrl: "/exterior.png" },
  ];

  // Section 3 main video state
  const [commercialMainVideo, setCommercialMainVideo] = useState("/commercial_main.mp4");
  const commercialThumbnails: Thumbnail[] = [
    { id: 1, url: "/commercial_main.mp4", imageUrl: "/first.png" },
    { id: 2, url: "/Commercial-Engine.mp4", imageUrl: "/second.png" },
    { id: 3, url: "/Commercial-Cabin.mp4", imageUrl: "/third.png" },
  ];

  // Detect active section
  const handleScroll = () => {
    if (!containerRef.current) return;
    const sections = containerRef.current.querySelectorAll(".section");
    let current = 0;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        current = index;
      }
    });
    setActiveIndex(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory relative"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Section 1 */}
      <section className="section h-screen w-full flex items-center justify-center bg-black text-white snap-start">
        <h1 className="text-5xl lg:text-6xl font-bold text-center px-8">
          Evolving the drive with <br /> 360-degree comprehensive solutions
        </h1>
      </section>

      {/* Section 2: Passenger Vehicles */}
      <section className="section h-screen w-full flex flex-col lg:flex-row items-center bg-black text-white px-8 lg:px-32 snap-start">
        {/* Left: Text */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex flex-col justify-center h-full">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Passenger Vehicles</h1>
          <p className="text-lg text-gray-400">
            Rewing up innovation from interior to exterior.
          </p>
        </div>

        {/* Right: Main Video + Thumbnails */}
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center h-full">
          <video
            key={passengerMainVideo}
            src={passengerMainVideo}
            autoPlay
            loop
            muted
            className="w-full max-h-96 rounded-lg mb-4"
          />

          <div className="flex w-full justify-between mt-2 space-x-2">
            {passengerThumbnails.map((thumb) => (
              <div
                key={thumb.id}
                onClick={() => setPassengerMainVideo(thumb.url)}
                className="w-1/5 h-20 cursor-pointer flex-shrink-0 transform transition hover:scale-105"
              >
                <img
                  src={thumb.imageUrl}
                  alt="thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Commercial Vehicles */}
      <section className="section h-screen w-full flex flex-col lg:flex-row items-center bg-black text-white px-8 lg:px-32 snap-start">
        {/* Left: Text */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex flex-col justify-center h-full">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Commercial Vehicles</h1>
          <p className="text-lg text-gray-400">
            Advancing engineering for heavy-duty vehicles.
          </p>
        </div>

        {/* Right: Main Video + Thumbnails */}
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center h-full">
          <video
            key={commercialMainVideo}
            src={commercialMainVideo}
            autoPlay
            loop
            muted
            className="w-full max-h-96 rounded-lg mb-4"
          />

          <div className="flex w-full justify-between mt-2 space-x-2">
            {commercialThumbnails.map((thumb) => (
              <div
                key={thumb.id}
                onClick={() => setCommercialMainVideo(thumb.url)}
                className="w-1/3 h-20 cursor-pointer flex-shrink-0 transform transition hover:scale-105"
              >
                <img
                  src={thumb.imageUrl}
                  alt="thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
