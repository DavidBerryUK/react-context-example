import React from "react";
import UIAddress from "./UIAddress";
import UIEmail from "./UIEmail";
import UIName from "./UIName";
import UIPhone from "./UIPhone";

const UICustomer: React.FC = () => {
  return (
    <>
      <UIName />
      <UIAddress />
      <UIPhone />
      <UIEmail />
    </>
  );
};

export default UICustomer;
