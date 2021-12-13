import { useCustomerContext } from "../../contexts/customer/CustomerContext";
import CommandSetEmail from "../../contexts/customer/commands/CommandSetEmail";
import React, { useState } from "react";
import UIButtonRestore from "../controls/UIButtonRestore";
import UIButtonSave from "../controls/UIButtonSave";
import UIColumn from "../layout/UIColumn";
import UIRow from "../layout/UIRow";
import UISection from "../layout/UISection";
import UIText from "../controls/UIText";

// Display Customer Email
//
// The email is stored in local state, initially copied from the customer context
// * The email may be saved to the context by pressing SAVE
// * The email may be restored from the context by pressing RESTORE
//
const UIEmail: React.FC = () => {
  // get access to the customer context
  const { state: customerState, dispatch: customerDispatch } = useCustomerContext();
  // local state management
  const [email, setEmail] = useState(customerState.email);

  //
  // Event Handlers
  //
  const handleHomeChanged = (value: string) => {
    setEmail({ ...email, home: value });
  };
  const handleWorkChanged = (value: string) => {
    setEmail({ ...email, work: value });
  };
  const handleSaveClicked = () => {
    // update customer state with customer email address
    customerDispatch(new CommandSetEmail(email.work, email.home));
  };
  const handleRestoreClicked = () => {
    // restore customer email address from customer context
    setEmail(customerState.email);
  };

  // note: No CSS classes in high level UI Components
  return (
    <UISection title="Email">
      <UIRow>
        <UIColumn>
          <UIText label="home" value={email.home} onChange={handleHomeChanged} />
        </UIColumn>
        <UIColumn>
          <UIText label="work" value={email.work} onChange={handleWorkChanged} />
        </UIColumn>
      </UIRow>
      <UIRow alignRight>
        <UIButtonRestore onClick={handleRestoreClicked} />
        <UIButtonSave onClick={handleSaveClicked} />
      </UIRow>
    </UISection>
  );
};

export default UIEmail;
