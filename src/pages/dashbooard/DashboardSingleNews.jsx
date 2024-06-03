/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DashboardSingleNews = ({ news, handleDelete }) => {
  const { _id, name, image_url, price, description } = news;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-20">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-xl">Price: {price}</p>
        <p>{description}</p>
        <div className="card-actions justify-start">
          <Link
            to={`/see-details/${_id}`}
            className="bg-[#E57255] px-4 py-2 font-semibold text-white rounded-md "
          >
            See Details
          </Link>
          <Link
            to={`update-page/${_id}`}
            className="bg-green-600 px-4 py-2 font-semibold text-white rounded-md "
          >
            Update
          </Link>
          <Link
            onClick={() => handleDelete(_id)}
            className="bg-red-600 px-4 py-2 font-semibold text-white rounded-md "
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardSingleNews;
