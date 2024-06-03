import banner from "../../../public/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#F1D4CD] min-h-[500px] flex items-center justify-center">
      <div className="flex items-center justify-evenly flex-wrap gap-20">
        <div className="px-4 py-4 md:px-0 md:py-4">
          <h1 className="text-5xl font-semibold ">
            Ride-on R15 V4 <br />
            with Smile
          </h1>
          <p className="text-gray-500 py-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
            <br />
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <button className="bg-[#E57255] px-4 py-2 font-semibold text-white rounded-md">
            Purches{" "}
          </button>
        </div>
        <div className="">
          <img src={banner} className="w-[350px] h-[350px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
