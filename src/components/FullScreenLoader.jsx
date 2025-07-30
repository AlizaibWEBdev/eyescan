import icon from "../assets/icon.png";

const FullScreenLoader = () => {
  return (
    <div className="full-screen-loader">
      <img src={icon} alt="Loading..." />
      <div className="loader-spinner"></div>
    </div>
  );
};

export default FullScreenLoader;