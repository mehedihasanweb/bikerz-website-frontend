import { useEffect, useState } from "react";
import DashboardSingleNews from "./DashboardSingleNews";
import toast from "react-hot-toast";

const DashboardHome = () => {
  const [allNews, setAllNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    fetch("https://bikerz-website-backend.vercel.app/bikes")
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data);
        setFilteredNews(data);
      });
  }, []);

  console.log(allNews);

  const handleDelete = (id) => {
    fetch(`https://bikerz-website-backend.vercel.app/bikes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const remaining = allNews?.filter((data) => data?._id !== id);
        toast.success("Delete successfull");
        // console.log(remaining);
        return setFilteredNews(remaining);
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = allNews.filter((news) =>
      news.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNews(filtered);
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">All Products</h2>

      <div className="flex items-center justify-center gap-3  mt-8">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-300 px-2 py-2 rounded-md w-1/2 border border-transparent focus:outline-none"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          onClick={handleSearchClick}
          className="bg-[#E57255] px-3 py-2 rounded-md text-white font-semibold"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-6 mt-20">
        {filteredNews?.map((news) => (
          <DashboardSingleNews
            key={news._id}
            news={news}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
