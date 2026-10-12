const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-1/2">

          <img
            alt="Tailwind CSS hero component"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            max-height="400px"
            
            className="w-full rounded-lg shadow-2xl"
          />
            </div>
          <div>
            <h1 className="text-5xl font-bold">Study Smarter. Achieve More</h1>
            <p className="py-6">
             Your smarter way to study. Organize your notes, simplify complex topics, and make every study session count.
            </p>
            <button className="btn bg-violet-700">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
