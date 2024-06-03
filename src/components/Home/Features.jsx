import featureBike from "../../../public/featureBike/featureBike.png";

const Features = () => {
  return (
    <div className="pt-20">
      <h2 className="text-center text-2xl font-semibold">
        Featured Bikes In This Year
      </h2>
      <p className="text-[#E76F51] text-center font-semibold py-1">
        Best bike collection
      </p>
      <hr className=" border border-[#E76F51] w-16 mx-auto" />
      <div className="pt-12 flex flex-wrap items-center justify-around gap-10">
        <img src={featureBike} alt="" />
        <img src={featureBike} alt="" />
        <img src={featureBike} alt="" />
      </div>
    </div>
  );
};

export default Features;
