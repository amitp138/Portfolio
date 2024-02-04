import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home_data">
          <h1 className="home__title">
            <span>I'm Amit Pandey.</span> Full Stack Developer
          </h1>
          <p className="home__description">
            I am a dedicated 4th-year Computer Science student, I bring
            proficiency in React JS, JavaScript, HTML, CSS, and more to the
            table. With a strong programming foundation and a passion for
            innovative web app solutions, I excel in solving real world
            problems. My collaborative nature and leadership abilities make me a
            valuable asset to any company, poised to drive success through
            creative development solutions
          </p>
          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
