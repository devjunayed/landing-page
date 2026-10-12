import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IoShareOutline, IoShareSocial } from "react-icons/io5";

const Social = () => {
  return (
    <div>
      <div className="fab fab-flower">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-circle "
        >
          <IoShareSocial />
        </div>

        {/* Main Action button replaces the original button when FAB is open */}
        <button className="fab-main-action btn btn-circle btn-lg"><IoShareOutline /></button>

        {/* buttons that show up when FAB is open */}
        <button className="btn btn-lg btn-circle"><FaFacebook /></button>
        <button className="btn btn-lg btn-circle"><FaInstagram /></button>
        <button className="btn btn-lg btn-circle"><FaYoutube /></button>
        <button className="btn btn-lg btn-circle"><FaX /></button>
      </div>
    </div>
  );
};

export default Social;
