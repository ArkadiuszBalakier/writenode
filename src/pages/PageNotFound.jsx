import { Link } from "react-router-dom";
import NotFound from "../assets/images/page-not-found.jpg";

import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");

  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src={NotFound} alt="page not found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  );
};
