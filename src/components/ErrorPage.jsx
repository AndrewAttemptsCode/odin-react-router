import { Link, useRouteError } from "react-router-dom";

const ErrorPage= () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Ut oh, this route does not exist!</h1>
      <i>{error.statusText || error.message}</i>
      <Link to="/">You may return home, by clicking here though</Link>
    </div>
  );
} 

export default ErrorPage;