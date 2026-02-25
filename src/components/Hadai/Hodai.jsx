import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Hodai = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>hodai</h2>
    </div>
  );
};

export default Hodai;
