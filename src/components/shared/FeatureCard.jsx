
export const FeatureCard = ({ title, icon, subText }) => {
  return (
    <>
      <a href="#" className="hover-3d my-4 mx-8 cursor-pointer">
        {/* content */}
        <div className="card w-96 border border-transparent shadow-sm shadow-olive-500 text-white ">
          <div className="card-body">
            <div className="flex justify-between mb-5">
              <div className="font-bold">{title}</div>
              <div className="text-5xl opacity-10">{icon}</div>
            </div>
            <div className="text-lg mb-4 opacity-40">{subText}</div>
          </div>
        </div>

        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
    </>
  );
};
