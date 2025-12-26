import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import "./ActionButton.css";

export default function ActionButton({
  to = "/",
  text = "View More",
  outerClass = "",
  iconBg = "var(--color-primary)",
  iconColor = "#fff",
  textBg = "var(--color-secondary)",
  textColor = "#000",
}) {
  return (
    <Link
      to={to}
      className={`services-btn text-decoration-none ${outerClass}`}
    >
      <div
        className="services-btn-inner-1"
        style={{
          backgroundColor: iconBg,
          color: iconColor,
        }}
      >
        <ImArrowRight2 />
      </div>

      <div
        className="services-btn-inner-2 text-nowrap"
        style={{
          backgroundColor: textBg,
          color: textColor,
        }}
      >
        {text}
      </div>
    </Link>
  );
}
