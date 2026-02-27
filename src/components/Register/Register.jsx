import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
const authInfo=useContext(AuthContext)
console.log(authInfo)
const {registerUser}=useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault()
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    const confirmPassword=e.target.confirmPassword.value;

    console.log(name,photo,email,password,confirmPassword)
  };

  return (
    <div className="w-[40%] mx-auto min-w[500px] border-red-500 p-2 rounded-xl">
      <form className="space-y-2" onSubmit={handleRegister}>
        <div>
          <p>Name</p>
          <input name="name" 
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Photo</p>
          <input name="photo" 
            type="text"
            placeholder="Photo"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Email</p>
          <input name="email" 
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Password</p>
          <input name="password" 
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <input name="confirmPassword" 
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
