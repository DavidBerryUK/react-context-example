import { useCustomerContext } from "../../contexts/customer/CustomerContext";
import CommandSetName from "../../contexts/customer/commands/CommandSetName";
import React, { useState } from "react";
import UIButtonCancel from "../controls/UIButtonCancel";
import UIButtonSave from "../controls/UIButtonSave";
import UIColumn from "../layout/UIColumn";
import UIRow from "../layout/UIRow";
import UISection from "../layout/UISection";
import UIText from "../controls/UIText";

const UIName: React.FC = () => {
  const { state: customerState, dispatch: customerDispatch } = useCustomerContext();
  const [name, setName] = useState(customerState.name);

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
    customerDispatch(new CommandSetName(name.title, name.forename, name.surname));
  };
  const handleCancelClicked = () => {
    setName(customerState.name);
  };

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
        <UIButtonCancel onClick={handleCancelClicked} />
        <UIButtonSave onClick={handleSaveClicked} />
      </UIRow>
    </UISection>
  );
};

export default UIName;
