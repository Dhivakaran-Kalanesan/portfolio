import "./WorkingStyle.css";
import { FaCheckCircle } from "react-icons/fa";
import ActionButton from "../../../components/ActionButton/ActionButton";

export default () => {
    return <>
        <section className="py-5 bg-light">
            <div className="container my-5">
                <div className="row g-3">
                    {/* LEFT COLUMN */}
                    <div className="col-md-4">
                        <div className="h-100 d-flex flex-column justify-content-between">
                            <div>
                                <h6 className="fs-3">
                                    <span className="fw-bold theme-text-primary">-</span> Work Overview
                                </h6>
                                <h1 className="fw-bold display-5">
                                    My <span className="theme-text-primary">Work Approach</span>
                                </h1>
                            </div>

                            <div className="card p-4">
                                <h6 className="fw-bold">Project Mindset</h6>
                                <p>
                                    I approach every project with a focus on clarity, scalability,
                                    and long-term maintainability. My goal is to build reliable
                                    solutions that grow with real-world needs.
                                </p>
                                <ActionButton
                                    to="/projects"
                                    text="View My Projects"
                                    outerClass="bg-dark"
                                    iconBg="#fff"
                                    iconColor="#000"
                                    textBg="var(--color-secondary)"
                                    textColor="#000"
                                />
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE COLUMN */}
                    <div className="col-md-4">
                        <div className="h-100 d-flex align-items-end justify-content-center">
                            <div className="p-4 theme-primary rounded text-white w-100">
                                <h6>Focused</h6>
                                <h3 className="display-6 fw-bold">Focused Development</h3>
                                <ul type="none" className="m-0 p-0">
                                    <li className="mb-2 d-flex">
                                        <span className="me-3"><FaCheckCircle /></span>
                                        Feature enhancements and refinements
                                    </li>
                                    <li className="mb-2 d-flex">
                                        <span className="me-3"><FaCheckCircle /></span>
                                        Bug fixing and performance optimization
                                    </li>
                                    <li className="mb-2 d-flex">
                                        <span className="me-3"><FaCheckCircle /></span>
                                        Clean, maintainable, and readable code
                                    </li>
                                    <li className="mb-2 d-flex">
                                        <span className="me-3"><FaCheckCircle /></span>
                                        Quick iteration with clear outcomes
                                    </li>
                                    <li className="mb-2 d-flex">
                                        <span className="me-3"><FaCheckCircle /></span>
                                        Strong focus on best practices
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-md-4">
                        <div className="h-100 card p-4">
                            <h6>Sustained</h6>
                            <h3 className="display-6 theme-text-primary fw-bold">
                                Ongoing Development
                            </h3>
                            <ul type="none" className="m-0 p-0">
                                <li className="mb-2 d-flex">
                                    <span className="me-3 theme-text-primary"><FaCheckCircle /></span>
                                    Continuous feature development
                                </li>
                                <li className="mb-2 d-flex">
                                    <span className="me-3 theme-text-primary"><FaCheckCircle /></span>
                                    Codebase improvement and refactoring
                                </li>
                                <li className="mb-2 d-flex">
                                    <span className="me-3 theme-text-primary"><FaCheckCircle /></span>
                                    Scalable architecture planning
                                </li>
                                <li className="mb-2 d-flex">
                                    <span className="me-3 theme-text-primary"><FaCheckCircle /></span>
                                    Consistent progress alignment
                                </li>
                                <li className="mb-2 d-flex">
                                    <span className="me-3 theme-text-primary"><FaCheckCircle /></span>
                                    Long-term project understanding
                                </li>
                                <li className="mb-2 d-flex">
                                    <span className="me-3 theme-text-primary"><FaCheckCircle /></span>
                                    Stable and reliable development flow
                                </li>
                                <li className="mb-2 d-flex">
                                    <span className="me-3 theme-text-primary"><FaCheckCircle /></span>
                                    Improved system reliability and performance over time
                                </li>
                                <li className="mb-2 d-flex">
                                    <span className="me-3 theme-text-primary"><FaCheckCircle /></span>
                                    Knowledge-driven decisions based on project evolution
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>;
};
