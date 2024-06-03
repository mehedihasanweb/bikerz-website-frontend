import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { Googlelogin } = useAuth();

  const handleGoogleLogin = () => {
    Googlelogin().then((result) => {
      console.log(result);
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
