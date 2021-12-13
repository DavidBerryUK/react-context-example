import React from "react";
import UIAddress from "./UIAddress";
import UIColumn from "../layout/UIColumn";
import UICustomerDebugState from "./UICustomerDebugState";
import UIEmail from "./UIEmail";
import UIName from "./UIName";
import UIPhone from "./UIPhone";
import UIRow from "../layout/UIRow";

//
// Display the customer form, along with
// the context debug info
//
const UICustomer: React.FC = () => {
  // note: No CSS classes in high level UI Components
  return (
    <UIRow>
      <UIColumn>
        <UIName />
        <UIAddress />
        <UIPhone />
        <UIEmail />
      </UIColumn>
      <UIColumn>
        <UICustomerDebugState />
      </UIColumn>
    </UIRow>
  );
};

export default UICustomer;
