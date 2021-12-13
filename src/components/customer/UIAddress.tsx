import { useCustomerContext } from "../../contexts/customer/CustomerContext";
import CommandSetAddress from "../../contexts/customer/commands/CommandSetAddress";
import React, { useState } from "react";
import UIButtonRestore from "../controls/UIButtonRestore";
import UIButtonSave from "../controls/UIButtonSave";
import UIColumn from "../layout/UIColumn";
import UIRow from "../layout/UIRow";
import UISection from "../layout/UISection";
import UIText from "../controls/UIText";

// Display Customer Address
//
// The address is stored in local state, initially copied from the customer context
// * The address may be saved to the context by pressing SAVE
// * The address may be restored from the context by pressing RESTORE
//
const UIAddress: React.FC = () => {
  // get access to the customer context
  const { state: customerState, dispatch: customerDispatch } = useCustomerContext();
  // local state management
  const [address, setAddress] = useState(customerState.address);

  //
  // Event Handlers
  //
  const handleLine1Changed = (value: string) => {
    setAddress({ ...address, line1: value });
  };
  const handleLine2Changed = (value: string) => {
    setAddress({ ...address, line2: value });
  };
  const handleLine3Changed = (value: string) => {
    setAddress({ ...address, line3: value });
  };
  const handleLine4Changed = (value: string) => {
    setAddress({ ...address, line4: value });
  };
  const handlePostcodeChanged = (value: string) => {
    setAddress({ ...address, postCode: value });
  };
  const handleSaveClicked = () => {
    // update customer state with customer address
    customerDispatch(new CommandSetAddress(address.line1, address.line2, address.line3, address.line4, address.postCode));
  };
  const handleRestoreClicked = () => {
    // restore customer address from customer context
    setAddress(customerState.address);
  };

  // note: No CSS classes in high level UI Components
  return (
    <UISection title="Address">
      <UIRow>
        <UIColumn>
          <UIText label="Line 1" value={address.line1} onChange={handleLine1Changed} />
        </UIColumn>
        <UIColumn>
          <UIText label="Line 2" value={address.line2} onChange={handleLine2Changed} />
        </UIColumn>
      </UIRow>
      <UIRow>
        <UIColumn>
          <UIText label="Line 3" value={address.line3} onChange={handleLine3Changed} />
        </UIColumn>
        <UIColumn>
          <UIText label="Line 4" value={address.line4} onChange={handleLine4Changed} />
        </UIColumn>
      </UIRow>
      <UIRow>
        <UIColumn>
          <UIText label="Post Code" value={address.postCode} onChange={handlePostcodeChanged} />
        </UIColumn>
      </UIRow>
      <UIRow alignRight>
        <UIButtonRestore onClick={handleRestoreClicked} />
        <UIButtonSave onClick={handleSaveClicked} />
      </UIRow>
    </UISection>
  );
};

export default UIAddress;
