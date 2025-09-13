import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import UseAuth from "../../hooks/UseAuth";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = UseAuth();
  const navigate = useNavigate();

  const handleSignOutUser = () => {
    signOutUser()
      .then((result) => {
        toast.success("User successfully sign out");
        navigate('/login')
        console.log(result);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src={logo} alt="" />
          <span className="font-bold">SoloSphere</span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li className={user ? "hidden" : "block"}>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>

        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full" title="">
              <img
                title={user?.displayName}
                referrerPolicy="no-referrer"
                alt="User Profile Photo"
                src={user ? user.photoURL : ""}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/add-jobs"}>Add Job</Link>
            </li>
            <li>
              <Link to={"/job-details"}>Job Details</Link>
            </li>
            <li>
              <Link to={"/my-posted-jobs"}>My Posted Jobs</Link>
            </li>
            <li>
              <Link to={"/my-bids"}>My Bids</Link>
            </li>
            <li>
              <Link to={"/bid-requests"}>Bid Requests</Link>
            </li>
            <li className="mt-2">
              <button
                onClick={handleSignOutUser}
                className="bg-gray-200 block text-center"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
