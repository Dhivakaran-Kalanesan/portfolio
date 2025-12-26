import "./Hero.css";
import heroImage from "../../../assets/images/dhiva.png";
import { ImArrowRight2 } from "react-icons/im";

export default () => {
  return (
    <>
      <section className="py-2 hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="h-100 text-center d-flex flex-column align-items-center justify-content-center pt-5">
                <h6 className="fs-3"><span className="theme-text-primary fw-bold">-</span> Hello</h6>
                <h1 className="fw-bold display-4 tracking-tight">I'm <span className="theme-text-primary text-decoration-underline">Dhivakaran,</span></h1>
                <h1 className="fw-bold display-4 tracking-tight">Software Developer</h1>
                {/* Badge */}
                <div className="hire-me-badge">
                  <div className="hero-mark">
                    <svg viewBox="0 0 100 100" className="circle-text">
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50, 50
                           m -35, 0
                           a 35,35 0 1,1 70,0
                           a 35,35 0 1,1 -70,0"
                        />
                      </defs>

                      <text fill="white" fontSize="16">
                        <textPath href="#circlePath">
                          HIRE ME • HIRE ME • HIRE ME •
                        </textPath>
                      </text>
                    </svg>
                    {/* Static Center Circle */}
                    <div className="center-circle">
                      <code className="text-white fw-bold">&lt;/&gt;</code>
                    </div>
                  </div>
                </div>
                <div className="px-md-5 hero-img">
                  <img src={heroImage} alt="hero" className="img-fluid" />
                  <div className="hero-btn-group">
                    <div className="hero-btn-1"><span>Portfolio</span><span className="arrowCircle"><ImArrowRight2 /></span></div>
                    <div className="hero-btn-2">Hire Me</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
