import "./Hero.css";
import arrow_btn from "../components/Assets/arrow_btn.png";
import pause_icon from "../components/Assets/pause_icon.png";
import play_icon from "../components/Assets/play_icon.png";
const Hero = ({
  setPlaystatus,
  herodata,
  playstatus,
  herocount,
  setHerocount,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHerocount(0)}
            className={herocount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHerocount(1)}
            className={herocount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHerocount(2)}
            className={herocount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>setPlaystatus(!playstatus)}  src={playstatus?pause_icon:play_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
