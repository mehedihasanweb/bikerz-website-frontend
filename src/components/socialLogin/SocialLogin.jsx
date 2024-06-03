import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { Googlelogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    Googlelogin().then((result) => {
      const userInfo = {
        name: result?.user?.displayName,
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
            navigate("/");
          }
        });
    });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className=" bg-[#E57255] text-white w-full py-2 rounded-md"
    >
      Google
    </button>
  );
};

export default SocialLogin;
