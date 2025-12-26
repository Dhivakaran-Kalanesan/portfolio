import { Link } from "react-router-dom";
import "./EducationContainer.css";
import { FaUserGraduate } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";


export const workData = [
  {
    title: "Education",
    icon: FaUserGraduate,
    items: [
      {
        heading: "B.Sc (Computer Science)",
        subText: "HH The Rajah's College, Pudukkottai",
        year: "2017 - 2020",
      },
      {
        heading: "B.Ed",
        subText: "Naina Mohamed College of Education, Rajendrapuram",
        year: "2020 - 2022",
      },
    ],
  },
  {
    title: "Experience",
    icon: MdOutlineWork,
    items: [
      {
        heading: "Full Stack Developer",
        subText: "BrandBee Technologies, Karaikudi",
        year: "2023 - 2024",
      },
      {
        heading: "Software Developer",
        subText: "ConnectiveLinks Technology, Chennai",
        year: "2024 - Present",
      },
    ],
  },
];

function WorkCard({ title, icon: Icon, items }) {
  return (
    <div className="h-100 theme-light p-4 rounded">
      
      {/* Header */}
      <div className="d-flex justify-content-start align-items-center gap-3">
        <div className="d-flex justify-content-center align-items-center p-3 rounded-circle theme-primary">
          <Icon className="fs-3 text-white fw-bold" />
        </div>
        <h5 className="fs-3 theme-text-primary fw-bold p-0 m-0">
          {title}
        </h5>
      </div>

      <hr />

      {/* Content */}
      {items.map((item, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-start mb-2"
        >
          <div>
            <h6 className="fw-bold">{item.heading}</h6>
            <p className="text-muted">{item.subText}</p>
          </div>
          <div className="bg-white p-2 rounded">
            <h6 className="fw-bold p-0 m-0 text-nowrap">
              {item.year}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}


export default () => {
  return <>
    <section className="bg-white pb-5">
      <div className="container">
        <div className="row py-5 g-4">
          <div className="col-md-12">
            <div className="h-100">
              <h6 className="fs-3 text-center"><span className="fw-bold text-theme-primary">-</span> Education & Work</h6>
              <h1 className="fw-bold display-5 text-center">My <span className="theme-text-primary">Education</span> & Work <span className="theme-text-primary">Experience</span></h1>
            </div>
          </div>
         {workData.map((card, index) => (
          <div className="col-md-6" key={index}>
            <WorkCard
              title={card.title}
              icon={card.icon}
              items={card.items}
            />
          </div>
        ))}
        </div>
      </div>
    </section>
  </>;
}

