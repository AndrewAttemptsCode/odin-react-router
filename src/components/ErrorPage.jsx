import { Link } from "react-router-dom";

const ErrorPage= () => {
  return (
    <div>
      <h1>Ut oh, this route does not exist!</h1>
      <Link to="/">You may return home, by clicking here though</Link>
    </div>
  );
} 

export default ErrorPage;