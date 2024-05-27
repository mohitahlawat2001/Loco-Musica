import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Mascot from "../assets/mascot.png";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-4">{err.status} : {err.statusText}</p>
        <p className="text-lg text-gray-600 mb-6">Sorry, an unexpected error has occurred. Please try again later.</p>
        <Link to="/" className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600">
          Go to Homepage
        </Link>
      </div>
      <div className="mt-12">
        <img src={Mascot} alt="Error Illustration" className="w-64 mx-auto"/>
      </div>
    </div>
  );
};

export default Error;
