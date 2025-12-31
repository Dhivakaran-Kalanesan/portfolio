import "./Projects.css";
import ActionButton from "../../../components/ActionButton/ActionButton";
import RestaurantPos from "../../../assets/images/restaurant-pos.png";
import RetailPos from "../../../assets/images/retail-pos.png";
import OnlineOrdering from "../../../assets/images/online-ordering.png";

function ProjectCard({
  image,
  tags = [],
  title,
  description = [],
  buttonText,
  buttonLink,
  reverse = false
}) {
  return (
    <div className="col-md-12">
      <div className="h-100 p-3 project-wrap">
        <div className={`row ${reverse ? "flex-row-reverse" : ""}`}>
          
          {/* Image */}
          <div className="col-md-6">
            <div className="h-100 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid project-img"
                src={image}
                alt={title}
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-md-6">
            <div className="h-100 project-detail-wrap px-md-3 py-md-3 px-0 py-3">
              
              <div className="d-flex gap-3 flex-wrap">
                {tags.map((tag, index) => (
                  <div key={index} className="skill-badge">
                    {tag}
                  </div>
                ))}
              </div>

              <h3 className="project-head mt-3">{title}</h3>

              {description.map((text, index) => (
                <p key={index} className="project-para mb-3">
                  {text}
                </p>
              ))}

              <ActionButton
                to={buttonLink}
                text={buttonText}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default function Projects() {

  const projects = [
  {
    image: RestaurantPos,
    tags: ["Restaurant POS", "WhatsApp API", "SaaS Platform"],
    title: "Smart Restaurant POS with WhatsApp Integration",
    description: [
      "A cloud-based restaurant POS system designed to simplify order management, billing, inventory tracking, and real-time sales analytics.",
      "Integrated with WhatsApp Business API to send order confirmations, invoices, payment links, and automated customer notifications."
    ],
    buttonText: "View Project Info",
    buttonLink: "/projects/restaurant-pos",
    reverse: false
  },
  {
    image: OnlineOrdering,
    tags: ["Online Ordering", "Food Delivery", "SaaS Application"],
    title: "Online Food Ordering & Management SaaS Platform",
    description: [
      "A complete online ordering solution enabling customers to place pickup or delivery orders directly from web and mobile devices.",
      "Includes admin dashboard for restaurants to manage menus, orders, offers, users, and real-time order status updates."
    ],
    buttonText: "View Project Info",
    buttonLink: "/projects/online-ordering",
    reverse: true
  },
  {
    image: RetailPos,
    tags: [
      "Retail POS",
      "Shopify Integration",
      "Multi-Payment Gateway",
      "SaaS Platform"
    ],
    title: "Retail POS with Shopify Integration & Unified Payment Gateway",
    description: [
      "A modern retail POS integrated with Shopify for real-time inventory, order, and customer sync, supporting multiple secure payment gateways including Razorpay, PhonePe, Stripe, Mastercard, Thawani, Bank of Muscat, and local banking networks."
    ],
    buttonText: "View Project Info",
    buttonLink: "/projects/retail-pos",
    reverse: false
  }
];


  return (
    <section className="theme-primary">
      <div className="container">
        <div className="row py-5 g-4">

          {/* Heading */}
          <div className="col-md-6">
            <div className="h-100 p-2">
              <h6 className="fs-3 text-white">
                <span className="fw-bold">-</span> Projects
              </h6>
              <h1 className="fw-bold display-5 text-white">
                My <span className="theme-text-secondary">Latest Projects</span>
              </h1>
            </div>
          </div>

          {/* Button */}
          <div className="col-md-6">
            <div className="h-100 p-2 d-flex justify-content-start justify-content-md-end align-items-end">
              <ActionButton
                to="/projects"
                text="View All Projects"
              />
            </div>
          </div>

          {/* Projects */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}

        </div>
      </div>
    </section>
  );
}
