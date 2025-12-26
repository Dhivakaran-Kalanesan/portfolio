import "./Skills.css";
import Marquee from "react-fast-marquee";

export default () => {

    let skillsArr = [
        {"id": 1, "name": "PHP"},
        {"id": 2, "name": "MYSQL"},
        {"id": 3, "name": "REACT JS"},
        {"id": 4, "name": "META API"},
        {"id": 5, "name": "PAYMENT GATEWAYS"},
        {"id": 6, "name": "SAAS DEVELOPMENT"},
        {"id": 7, "name": "MICROSERVICES"},
        {"id": 8, "name": "POS"},
        {"id": 9, "name": "REST APIS"},
        {"id": 10, "name": "OPENCART"},
        {"id": 11, "name": "WORDPRESS"},
        {"id": 12, "name": "HTML"},
        {"id": 13, "name": "CSS"},
        {"id": 14, "name": "BOOTSTRAP"},
        {"id": 15, "name": "JAVASCRIPT"},
        {"id": 16, "name": "JQUERY"},
        {"id": 17, "name": "AJAX"}
    ];

  return <>
  <section>
  <Marquee className="skills-wrap theme-secondary p-3" speed={40} pauseOnHover gradient={false}>
        {skillsArr.map(skill => (
            <span key={skill.id}>
                <span className="mx-4 skills-span">{skill.name}</span>
                <span className="mx-2 skills-span">&#10022;</span>
            </span>
        ))}
  </Marquee>
  </section>
  </>;
}
