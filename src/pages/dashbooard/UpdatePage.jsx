import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdatePage = () => {
  const data = useLoaderData();
  // const token = localStorage.getItem("token");

  const { _id, name, currency, description, image_url, price } = data;

  const [title, setTitle] = useState(name);
  const [brand, setBrand] = useState(currency);
  const [descrip, setDescrip] = useState(description);
  const [image, setImage] = useState(image_url);
  const [amount, setAmount] = useState(price);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.title.value;
    const currency = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const updateInfo = {
      name,
      currency,
      price,
      description,
      image_url,
    };
    console.log(updateInfo);

    fetch(`https://bikerz-website-backend.vercel.app/bikes/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        // authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Successfully Updated");
      });
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center pt-20">UPDATE A CARD</h1>
      <div className="my-16 min-h-screen">
        <form onSubmit={handleUpdate}>
          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Price"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="description"
                value={descrip}
                onChange={(e) => setDescrip(e.target.value)}
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
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="IMAGE_URL"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center items-center">
            <input
              type="submit"
              value="Update Card"
              className="btn mt-4 w-full lg:w-[600px] bg-red-500 text-white p-4"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePage;
