export default function PerformancePage() {
  return (
    <div className="relative h-[640px] w-full text-center text-white overflow-hidden mt-[28px]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/automotive.224e7418884105595114.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <p className="text-sm">Driven by performance</p>
        <h1 className="text-3xl font-bold">
          Soft Trims and <span className="text-blue-500">NVH Solutions</span>
        </h1>
        <h1 className="text-3xl">for seamless rides</h1>
      </div>
    </div>
  );
}
