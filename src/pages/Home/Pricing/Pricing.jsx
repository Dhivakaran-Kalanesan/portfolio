import "./Pricing.css";
import { FaCheckCircle } from "react-icons/fa";
import ActionButton from "../../../components/ActionButton/ActionButton";

export default () => {
    return <>
        <section className="py-5 bg-light">
            <div className="container my-5">
                <div className="row g-3">
                    <div className="col-md-4">
                        <div className="h-100 d-flex flex-column justify-content-between">
                            <div>
                                <h6 className="fs-3"><span className="fw-bold theme-text-primary">-</span> Pricing Table </h6>
                                <h1 className="fw-bold display-5">
                                    My <span className="theme-text-primary">Pricing Model</span>
                                </h1>
                            </div>
                            <div className="card p-4">
                                <h6 className="fw-bold">Hey! Need a Custom Plans?</h6>
                                <p>Flexible pricing designed to fit your project requirements, timeline, and budget. Choose a model that works best for your business or reach out for a tailored solution.</p>
                                <ActionButton
                                    to="/"
                                    text="Get Started Now."
                                    outerClass="bg-dark"
                                    iconBg="#fff"
                                    iconColor="#000"
                                    textBg="var(--color-secondary)"
                                    textColor="#000"
                                  />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="h-100 d-flex align-items-end justify-content-center">
                            <div className="p-4 theme-primary rounded text-white w-100">
                                <h6>Hourly</h6>
                                <h3><span className="display-5 fw-bold">₹1,000</span>/Hour</h3>
                                <ul type="none" className="m-0 p-0">
                                    <li className="mb-2 d-flex"><span className="me-3"><FaCheckCircle /></span>Ideal for small tasks, bug fixes, or quick enhancements</li>
                                    <li className="mb-2 d-flex"><span className="me-3"><FaCheckCircle /></span>Flexible engagement with transparent billing</li>
                                    <li className="mb-2 d-flex"><span className="me-3"><FaCheckCircle /></span>Pay only for the time worked</li>
                                    <li className="mb-2 d-flex"><span className="me-3"><FaCheckCircle /></span>Suitable for short-term or urgent requirements</li>
                                    <li className="mb-2 d-flex"><span className="me-3"><FaCheckCircle /></span>Clear communication and fast turnaround</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="h-100 card p-4">
                            <h6>Monthly</h6>
                            <h3><span className="display-5 theme-text-primary fw-bold">₹80,000</span>/Month</h3>
                            <ul type="none" className="m-0 p-0">
                                <li className="mb-2 d-flex"><span className="me-3 theme-text-primary"><FaCheckCircle /></span>Best for long-term projects and ongoing development</li>
                                <li className="mb-2 d-flex"><span className="me-3 theme-text-primary"><FaCheckCircle /></span>Dedicated development time and priority support</li>
                                <li className="mb-2 d-flex"><span className="me-3 theme-text-primary"><FaCheckCircle /></span>Consistent delivery with weekly progress updates</li>
                                <li className="mb-2 d-flex"><span className="me-3 theme-text-primary"><FaCheckCircle /></span>Scalable workload based on project needs</li>
                                <li className="mb-2 d-flex"><span className="me-3 theme-text-primary"><FaCheckCircle /></span>Long-term collaboration and maintenance support</li>
                                <li className="mb-2 d-flex"><span className="me-3 theme-text-primary"><FaCheckCircle /></span>Improved cost efficiency for extended engagements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}
