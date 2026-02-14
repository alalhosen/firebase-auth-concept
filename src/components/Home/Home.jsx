import { useState } from "react";

const Home = (data) => {

  console.log(data);
  const [homeData, sethomeData]=useState("from home")
  return (
    <div className="flex justify-center items-center h-screen">
      {data.children}
    </div>
  );
};

export default Home;
