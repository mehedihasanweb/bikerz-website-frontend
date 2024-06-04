import { useEffect } from "react";
import { useState } from "react";
import SingleNews from "./SingleNews";

const LatesNews = () => {
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    fetch("https://bikerz-website-backend.vercel.app/bikes")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);

  return (
    <div className="pt-20">
      <h2 className="text-3xl font-semibold text-center">Latest News</h2>
      <div className="pt-8 flex flex-wrap items-center justify-center gap-12">
        {newses?.slice(0, 3)?.map((news) => (
          <SingleNews key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default LatesNews;
