import Experiance from "../../../assets/images/experiance.png";
import "./AboutContainer.css";
import ActionButton from "../../../components/ActionButton/ActionButton";

export default function AboutContainer() {

  // Dynamic content
  const aboutData = {
    image: Experiance,
    titleSmall: "About Me",
    titleMain: "Who is",
    titleHighlight: "Dhivakaran Kalanesan?",
    description: [
      "I'm a passionate software developer specializing in building modern, scalable, and user-friendly web applications. With strong experience in frontend and backend technologies, I focus on writing clean, efficient code and delivering solutions that solve real-world problems.",
      "I enjoy working across the full development lifecycle—from planning and design to development and deployment. My goal is to create high-performance applications that provide great user experiences while meeting business and technical requirements.",
    ],
    stats: [
      { value: "20+", label: "Projects Completed" },
      { value: "10+", label: "Industry Covered" },
    ],
    button: {
      text: "Download My CV",
      link: "/",
    },
  };

  return (
    <section className="bg-white">
      <div className="container">
        <div className="row py-5 g-4">

          {/* Image */}
          <div className="col-md-6">
            <div className="h-100">
              <img
                className="img-fluid"
                src={aboutData.image}
                alt="experience"
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-md-6">
            <div className="h-100 d-flex flex-column justify-content-center">

              <h6 className="fs-3">
                <span className="fw-bold theme-text-primary">-</span>{" "}
                {aboutData.titleSmall}
              </h6>

              <h1 className="fw-bold display-5">
                {aboutData.titleMain}{" "}
                <span className="theme-text-primary">
                  {aboutData.titleHighlight}
                </span>
              </h1>

              {/* Paragraphs */}
              {aboutData.description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              {/* Stats */}
              <div className="d-flex gap-4">
                {aboutData.stats.map((item, index) => (
                  <div key={index}>
                    <h5 className="fw-bold">{item.value}</h5>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <ActionButton
                to={aboutData.button.link}
                text={aboutData.button.text}
                outerClass="bg-dark"
                iconBg="#fff"
                iconColor="#000"
                textBg="var(--color-secondary)"
                textColor="#000"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
