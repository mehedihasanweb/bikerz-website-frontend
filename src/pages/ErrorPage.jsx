import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="container flex flex-col justify-center items-center h-screen text-center py-32">
      <h2 className="text-7xl font-semibold mb-8">Error {status || 404}</h2>
      <p className="lg:text-3xl">{error?.message}</p>
      <button className="btn bg-blue-500 text-white mt-8">
        <Link to={"/"}>HomePage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
