import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/socialLogin/SocialLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SignUp = () => {
  const { user, createUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password).then((result) => {
      // console.log(result?.user?.email);
      const userInfo = {
        name: name,
        email: result?.user?.email,
      };
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Login Successfull");
            navigate(from);
          }
        });
    });
  };

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [navigate, from, user]);

  return (
    <div className="hero min-h-[600px] py-12 bg-[#F1D4CD] mt-6">
      <div className=" ">
        <h1 className="text-5xl font-bold text-center mb-12">SIGN UP</h1>
        <div className="md:w-[500px] h-[550px] shadow-2xl bg-base-100 rounded-lg">
          <form onSubmit={handleSignIn} className="p-6 ">
            <div className="form-control pb-4">
              <label className="label">
                <span className="text-xl">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control pb-4">
              <label className="label">
                <span className="text-xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control pb-4">
              <label className="label">
                <span className="text-xl">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control pt-4">
              <button className="btn bg-[#E57255] text-white ">Sign Up</button>
            </div>
          </form>
          <p className="text-center">
            Do Not Have an Account?{" "}
            <Link to={"/login"} className="text-[#E57255] font-semibold ">
              Login
            </Link>
          </p>
          <div className="mx-6 my-4">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
