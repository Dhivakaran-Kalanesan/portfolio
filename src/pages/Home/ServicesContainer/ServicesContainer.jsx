import { TbDeviceImacCode } from "react-icons/tb";
import { MdPointOfSale, MdApi } from "react-icons/md";
import { Link } from "react-router-dom";

import "./ServicesContainer.css";
import ActionButton from "../../../components/ActionButton/ActionButton";

export default function ServicesContainer() {

const services = [
  {
    title: "Web & SaaS Development",
    desc: "Scalable web applications and SaaS dashboards built with performance, security, and clean architecture.",
    icon: TbDeviceImacCode, // Web + Code
    link: "/services/web-and-saas-development",
    variant: "light",
  },
  {
    title: "POS, Payments & Integrations",
    desc: "Custom POS systems with Shopify, WhatsApp integration, and secure multi-gateway payment solutions.",
    icon: MdPointOfSale, // POS + Payments
    link: "/services/pos-and-payment-integrations",
    variant: "primary",
  },
  {
    title: "API & Third-Party Integrations",
    desc: "Integrating external services, APIs, and platforms to extend functionality and automate business workflows.",
    icon: MdApi, // API
    link: "/services/api-and-third-party-integrations",
    variant: "primary",
  },
];


  return (
    <section className="theme-primary">
      <div className="container">
        <div className="row py-5 g-4">

          {/* Heading */}
          <div className="col-md-6">
            <div className="h-100 p-2">
              <h6 className="fs-3 text-white">
                <span className="fw-bold">-</span> Services
              </h6>
              <h1 className="fw-bold display-5 text-white">
                My <span className="theme-text-secondary">Services</span>
              </h1>
            </div>
          </div>

          {/* Button */}
          <div className="col-md-6">
            <div className="h-100 p-2 d-flex justify-content-start justify-content-md-end align-items-end">
              <ActionButton
                to="/services"
                text="View All Services"
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="h-100 py-2"></div>
          </div>

          {/* Cards */}
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLight = service.variant === "light";

            return (
              <div className="col-md-4" key={index}>
                <div
                  className={`h-100 service-col ${
                    isLight ? "bg-white" : "service-col-2"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`service-icon-wrap ${
                      isLight
                        ? "service-icon-1-wrap"
                        : "service-icon-2-wrap"
                    }`}
                  >
                    <Icon
                      className={
                        isLight ? "theme-text-primary" : "text-white"
                      }
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className={`text-center fw-bold ${
                        isLight ? "" : "text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-center ${
                        isLight ? "" : "text-white"
                      }`}
                    >
                      {service.desc}
                    </p>
                    <Link to={service.link}
                      className={`text-center d-block text-decoration-none ${
                        isLight ? "text-dark" : "text-light"
                      }`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
