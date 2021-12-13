import { useCustomerContext } from "../../contexts/customer/CustomerContext";
import CommandSetName from "../../contexts/customer/commands/CommandSetName";
import React, { useState } from "react";
import UIButtonRestore from "../controls/UIButtonRestore";
import UIButtonSave from "../controls/UIButtonSave";
import UIColumn from "../layout/UIColumn";
import UIRow from "../layout/UIRow";
import UISection from "../layout/UISection";
import UIText from "../controls/UIText";

// Display Customer Name
//
// The name is stored in local state, initially copied from the customer context
// * The name may be saved to the context by pressing SAVE
// * The name may be restored from the context by pressing RESTORE
//
const UIName: React.FC = () => {
  // get access to the customer context
  const { state: customerState, dispatch: customerDispatch } = useCustomerContext();
  // local state management
  const [name, setName] = useState(customerState.name);

  //
  // Event Handlers
  //
  const handleTitleChanged = (value: string) => {
    setName({ ...name, title: value });
  };
  const handleForenameChanged = (value: string) => {
    setName({ ...name, forename: value });
  };
  const handleSurnameChanged = (value: string) => {
    setName({ ...name, surname: value });
  };
  const handleSaveClicked = () => {
    // update customer state with customer name
    customerDispatch(new CommandSetName(name.title, name.forename, name.surname));
  };
  const handleRestoreClicked = () => {
    // restore customer name from customer context
    setName(customerState.name);
  };

  // note: No CSS classes in high level UI Components
  return (
    <UISection title="Name">
      <UIRow>
        <UIColumn>
          <UIText label="Title" value={name.title} onChange={handleTitleChanged} />
        </UIColumn>
        <UIColumn>
          <UIText label="Forename" value={name.forename} onChange={handleForenameChanged} />
        </UIColumn>
        <UIColumn>
          <UIText label="Surname" value={name.surname} onChange={handleSurnameChanged} />
        </UIColumn>
      </UIRow>
      <UIRow alignRight>
        <UIButtonRestore onClick={handleRestoreClicked} />
        <UIButtonSave onClick={handleSaveClicked} />
      </UIRow>
    </UISection>
  );
};

export default UIName;
