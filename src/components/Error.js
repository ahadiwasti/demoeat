import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="section section-center text-center">
      <h4>There was an error</h4>
      <Link to="/" className="btn btn-primary">
        GOTO HOMEPAGE
      </Link>
    </div>
  );
};

export default Error;
