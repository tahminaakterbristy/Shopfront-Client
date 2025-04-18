import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import SweetAlert2 from "react-sweetalert2";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;


    if (password.length < 8) {
      setRegisterError("Password should be at least 8 characters long");
      return;
    }
    setSuccess("");
    setRegisterError("");

    createUser(email, password)
      .then((result) => {
        const user = result?.user;
        updateProfile(user, { displayName: name, photoURL: photo }).then(() => {
          setUser((currentUser) => ({
            ...currentUser,
            displayName: name,
            photoURL: photo,
          }));
          setSuccess("User created successfully!");
          
          // SweetAlert2.fire({
          //   position: 'top-end',
          //   icons: 'success',
          //   title: 'Your account has been created',
          //   showConfirmButton: false,
          //   timer: 1500
          // });
          navigate('/login')
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#af8cac] to-[#96769e]">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg shadow-lg p-8 rounded-xl border border-gray-800 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create an Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 rounded-lg border border-gray-500 bg-white/20 text-white placeholder-gray-800 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 rounded-lg border border-gray-500 bg-white/20 text-white placeholder-gray-800 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password (8+ characters)"
              required
              className="w-full p-3 rounded-lg border border-gray-500 bg-white/20 text-white placeholder-gray-800 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="photo"
              placeholder="Profile Photo URL"
              required
              className="w-full p-3 rounded-lg border border-gray-500 bg-white/20 text-white placeholder-gray-800 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        {registerError && <p className="text-red-500 text-center mt-4">{registerError}</p>}
        {success && <p className="text-green-400 text-center mt-4">{success}</p>}

        <div className="text-center mt-6">
          <p className="text-gray-800 font-bold">
            Already have an account?{" "}
            <Link to="/Login" className="text-indigo-800 font-bold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
