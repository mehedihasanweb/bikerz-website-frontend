import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  console.log(user);
  const { displayName, email, photoURL } = user;
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">User Profile</h2>
      <div className="flex items-center justify-center text-center py-8">
        <div>
          <img src={photoURL} alt="user_photo" className="mx-auto" />
          <h3 className="py-3 text-2xl font-semibold">Name: {displayName}</h3>
          <p className="font-semibold pb-3">Email: {email}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolorem nam sequi ut magnam, harum ullam tempore ex esse
            voluptatibus!
          </p>
        </div>
      </div>

      <Link to={"update-profile"}>
        <button className="btn flex mt-4 mx-auto w-[600px] bg-red-400 text-white p-4">
          Update Profile
        </button>
      </Link>
    </div>
  );
};

export default UserProfile;
