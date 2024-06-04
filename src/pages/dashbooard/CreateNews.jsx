import toast from "react-hot-toast";

const CreateNews = () => {
  const token = localStorage.getItem("token");
  const handleAddNews = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.title.value;
    const currency = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const newsInfo = { name, currency, price, description, image_url };

    fetch("https://bikerz-website-backend.vercel.app/bikes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Created Successfull");
      });
  };
  return (
    <>
      <h1 className="text-5xl font-bold text-center pt-20">ADD A CARD</h1>
      <div className="my-16 min-h-screen">
        <form onSubmit={handleAddNews}>
          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                required
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="image_url"
                placeholder="IMAGE_URL"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center items-center">
            <input
              type="submit"
              value="Add Product"
              className="btn mt-4 w-full lg:w-[600px] bg-red-500 text-white p-4"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNews;
