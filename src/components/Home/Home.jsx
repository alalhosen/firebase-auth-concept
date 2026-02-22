import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex justify-center items-center h-screen">
      <h3 className="text-2xl">This is home.</h3>
    </div>
  );
};

export default Home;
