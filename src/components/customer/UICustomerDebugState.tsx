import { useCustomerContext } from "../../contexts/customer/CustomerContext";
import React from "react";

// Display a readonly version of the
// data stored in the customer context
// for demo purposes
//
const UICustomerDebugState: React.FC = () => {
  // get access to the customer context
  const { state: customerState } = useCustomerContext();

  // note: No CSS classes in high level UI Components
  return (
    <>
      <h1>Customer Context State</h1>
      <h3>Name</h3>
      <dl>
        <dt>title</dt>
        <dd>{customerState.name.title}</dd>
        <dt>forename</dt>
        <dd>{customerState.name.forename}</dd>
        <dt>surname</dt>
        <dd>{customerState.name.surname}</dd>
      </dl>
      <h3>Address</h3>
      <dl>
        <dt>line 1</dt>
        <dd>{customerState.address.line1}</dd>
        <dt>line 2</dt>
        <dd>{customerState.address.line2}</dd>
        <dt>line 3</dt>
        <dd>{customerState.address.line3}</dd>
        <dt>line 4</dt>
        <dd>{customerState.address.line4}</dd>
        <dt>post code</dt>
        <dd>{customerState.address.postCode}</dd>
      </dl>
      <h3>Phone</h3>
      <dl>
        <dt>home</dt>
        <dd>{customerState.phone.home}</dd>
        <dt>work</dt>
        <dd>{customerState.phone.work}</dd>
        <dt>mobile</dt>
        <dd>{customerState.phone.mobile}</dd>
      </dl>
      <h3>Email</h3>
      <dl>
        <dt>home</dt>
        <dd>{customerState.email.home}</dd>
        <dt>work</dt>
        <dd>{customerState.email.work}</dd>
      </dl>
    </>
  );
};

export default UICustomerDebugState;
