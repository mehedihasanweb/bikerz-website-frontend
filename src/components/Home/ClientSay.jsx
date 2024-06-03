import client from "../../../public/clientImg/client.png";
import client1 from "../../../public/clientImg/client1.png";
import client2 from "../../../public/clientImg/client2.png";

const ClientSay = () => {
  return (
    <div className="pb-20">
      <h2 className="text-3xl font-semibold text-center pb-8">
        Happy <span className="text-[#E76F51]">Clients says</span>
      </h2>
      <div className="flex flex-wrap md:flex-nowrap px-3 md:px-0 justify-center items-center gap-8 pt-8">
        <div className="mx-auto text-center border border-gray-300 p-6">
          <img src={client} alt="elient-image" className="mx-auto" />
          <p className="py-2 text-gray-400">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </p>
          <p className="py-2 font-semibold">Regina Miles</p>
          <p>Banker</p>
        </div>
        <div className="mx-auto text-center border border-gray-300 p-6">
          <img src={client1} alt="elient-image" className="mx-auto" />
          <p className="py-2 text-gray-400">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </p>
          <p className="py-2 font-semibold">Regina Miles</p>
          <p>Banker</p>
        </div>
        <div className="mx-auto text-center border border-gray-300 p-6">
          <img src={client2} alt="elient-image" className="mx-auto" />
          <p className="py-2 text-gray-400">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </p>
          <p className="py-2 font-semibold">Regina Miles</p>
          <p>Banker</p>
        </div>
      </div>
    </div>
  );
};

export default ClientSay;
