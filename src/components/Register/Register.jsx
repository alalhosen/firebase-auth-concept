import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length < 6) {
      setError("password must be 6 characters");
      return;
    }
     else if (password !== confirmPassword) {
      setError("password did't match");
      return;
    }
    if(!/\d{2,}$/.test(password)){
      setError("password must be end with at least 2 numbers")
      return
    }
    setError("")

    console.log(name, photo, email, password, confirmPassword);
    registerUser(email, password);
  };

  return (
    <div className="w-[40%] mx-auto min-w[500px] border-red-500 p-2 rounded-xl">
      <form className="space-y-2" onSubmit={handleRegister}>
        <div>
          <p>Name</p>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Photo</p>
          <input
            name="photo"
            type="text"
            placeholder="Photo"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
          />
        </div>
        {error && <small className="text-red-600">{error}</small>}
        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
