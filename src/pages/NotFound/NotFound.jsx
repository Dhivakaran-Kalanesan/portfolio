import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-6">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="mb-3">Page Not Found</h2>
            <p className="text-muted mb-4">
              Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn btn-dark px-4">
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
