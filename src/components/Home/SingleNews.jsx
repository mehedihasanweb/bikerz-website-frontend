import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleNews = ({ news }) => {
  // console.log(news);
  const { id, name, image_url, price, description } = news;
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
            to={`/see-details/${id}`}
            className="bg-[#E57255] px-4 py-2 font-semibold text-white rounded-md "
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
