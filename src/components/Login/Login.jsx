import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin,setUser, facebookLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    loginUser(email, password);
  };
  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => setUser(result.user));
  };
  const handleFacebookLogin = () => {
    googleLogin()
    .then((result) => setUser(result.user));
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
      <button onClick={handleGoogleLogin} className="btn btn-secondary">Google login</button>
      <button onClick={handleFacebookLogin} className="btn btn-secondary">Facebook login</button>
    </div>
  );
};

export default Login;
