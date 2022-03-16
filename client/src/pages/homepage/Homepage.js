import React from "react";
import Classes from "../../components/classes/Classes";
import Featured from "../../components/featured/Featured";
import Services from "../../components/services/Services";

const Homepage = () => {
  return (
    <div>
      <Featured />
      <Services />
      <Classes />
    </div>
  );
};

export default Homepage;
