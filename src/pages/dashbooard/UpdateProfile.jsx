import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProfile = () => {
  const user = useLoaderData();
  // console.log(user);
  // const token = localStorage.getItem("token");

  const [name, setName] = useState(user?.name);
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const mobile = form.mobile.value;

    console.log(name, age, mobile);

    const updatedInfo = { age, mobile, name };

    fetch(`https://bikerz-website-backend.vercel.app/user/${user?._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        // authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Profile Updated Done");
      });
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center pt-20">UPDATE PROFILE</h1>
      <div className="my-16 min-h-screen">
        <form onSubmit={handleUpdateProfile}>
          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={user?.email}
                disabled
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="age"
                placeholder="Age"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
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
              value="Update Product"
              className="btn mt-4 w-full lg:w-[600px] bg-red-500 text-white p-4"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
