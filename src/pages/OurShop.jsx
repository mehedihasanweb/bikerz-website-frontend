import { useLoaderData } from "react-router-dom";
import SingleNews from "../components/Home/SingleNews";

const OurShop = () => {
  const alldata = useLoaderData();
  console.log(alldata);
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center py-20">Our Shop</h2>
      <div className="flex items-center justify-center gap-12 flex-wrap">
        {alldata?.map((data, index) => (
          <SingleNews key={index} news={data} />
        ))}
      </div>
    </div>
  );
};

export default OurShop;
