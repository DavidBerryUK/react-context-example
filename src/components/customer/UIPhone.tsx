import { useCustomerContext } from "../../contexts/customer/CustomerContext";
import CommandSetPhone from "../../contexts/customer/commands/CommandSetPhone";
import React, { useState } from "react";
import UIButtonRestore from "../controls/UIButtonRestore";
import UIButtonSave from "../controls/UIButtonSave";
import UIColumn from "../layout/UIColumn";
import UIRow from "../layout/UIRow";
import UISection from "../layout/UISection";
import UIText from "../controls/UIText";

// Display Customer Phone
//
// The phone is stored in local state, initially copied from the customer context
// * The phone may be saved to the context by pressing SAVE
// * The phone may be restored from the context by pressing RESTORE
//
const UIPhone: React.FC = () => {
  // get access to the customer context
  const { state: customerState, dispatch: customerDispatch } = useCustomerContext();
  // local state management
  const [phone, setPhone] = useState(customerState.phone);

  //
  // Event Handlers
  //
  const handleHomeChanged = (value: string) => {
    setPhone({ ...phone, home: value });
  };
  const handleWorkChanged = (value: string) => {
    setPhone({ ...phone, work: value });
  };
  const handleMobileChanged = (value: string) => {
    setPhone({ ...phone, mobile: value });
  };
  const handleSaveClicked = () => {
    // update customer state with customer phone number
    customerDispatch(new CommandSetPhone(phone.work, phone.home, phone.mobile));
  };
  const handleRestoreClicked = () => {
    // restore customer phone from customer context
    setPhone(customerState.phone);
  };

  // note: No CSS classes in high level UI Components
  return (
    <UISection title="Phone Numbers">
      <UIRow>
        <UIColumn>
          <UIText label="Home" value={phone.home} onChange={handleHomeChanged} />
        </UIColumn>
        <UIColumn>
          <UIText label="Work" value={phone.work} onChange={handleWorkChanged} />
        </UIColumn>
        <UIColumn>
          <UIText label="Mobile" value={phone.mobile} onChange={handleMobileChanged} />
        </UIColumn>
      </UIRow>
      <UIRow alignRight>
        <UIButtonRestore onClick={handleRestoreClicked} />
        <UIButtonSave onClick={handleSaveClicked} />
      </UIRow>
    </UISection>
  );
};

export default UIPhone;
