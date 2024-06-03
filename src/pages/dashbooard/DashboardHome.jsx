import { useEffect, useState } from "react";
import DashboardSingleNews from "./DashboardSingleNews";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const DashboardHome = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bikes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const remaining = allNews?.filter((data) => data?._id !== id);
        toast.success("Delete successfull");

        return setAllNews(remaining);
      });
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">All Products</h2>

      <div className="flex items-center justify-center gap-3  mt-8">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-300 px-2 py-2 rounded-md w-1/2 border border-transparent focus:outline-none"
        />
        <Link className="bg-[#E57255] px-3 py-2 rounded-md text-white font-semibold">
          Search
        </Link>
      </div>
      <div className="flex flex-wrap gap-6 mt-20">
        {allNews?.map((news) => (
          <DashboardSingleNews
            key={news.id}
            news={news}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
