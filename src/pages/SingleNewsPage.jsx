import { useLoaderData } from "react-router-dom";

const SingleNewsPage = () => {
  const data = useLoaderData();
  const { availability, currency, description, image_url, name, price } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:flex items-center justify-center  min-h-[600px] gap-6 px-3 py-6 md:px-0 md:py-0">
      <img className="h-[400px] rounded-md" src={image_url} alt="" />
      <div className="h-[400px] space-y-3 pt-8">
        <h1 className="text-4xl font-semibold">Title: {name}</h1>
        <h3 className="text-xl font-semibold text-gray-600">Price: {price}</h3>
        <h3 className="text-xl font-semibold text-gray-600">
          Currency: {currency}
        </h3>
        <h3 className="text-xl font-semibold text-gray-600">
          Availability: {availability}
        </h3>
        <p className="text-xl font-semibold text-gray-600 md:w-[500px]">
          Description: {description}
        </p>
      </div>
    </div>
  );
};

export default SingleNewsPage;
