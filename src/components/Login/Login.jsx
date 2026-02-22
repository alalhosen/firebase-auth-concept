import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
const user=useContext(AuthContext)
console.log(user)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
  };
  return (
    <div className="w-[40%] mx-auto min-w[500px] border-red-500 p-2 rounded-xl">
      <form className="space-y-2" onSubmit={handleLogin}>
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
        <button className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
