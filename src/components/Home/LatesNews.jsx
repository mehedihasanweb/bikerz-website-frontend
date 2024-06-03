import { useEffect } from "react";
import { useState } from "react";
import SingleNews from "./SingleNews";

const LatesNews = () => {
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bikes")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);

  // console.log(newses);
  return (
    <div className="pt-20">
      <h2 className="text-3xl font-semibold text-center">Latest News</h2>
      <div className="pt-8 flex flex-wrap items-center justify-center gap-12">
        {newses?.slice(0, 3)?.map((news) => (
          <SingleNews key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default LatesNews;
