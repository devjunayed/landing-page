
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Help<span className="text-violet-500">Point</span></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a>Get Started</a>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
