import { useCustomerContext } from "../../contexts/customer/CustomerContext";
import React, { useState } from "react";
import UIButtonCancel from "../controls/UIButtonCancel";
import UIButtonSave from "../controls/UIButtonSave";
import UIColumn from "../layout/UIColumn";
import UIRow from "../layout/UIRow";
import UISection from "../layout/UISection";
import UIText from "../controls/UIText";

const UIEmail: React.FC = () => {
  const { state: customerState } = useCustomerContext();
  const [email, setEmail] = useState(customerState.email);

  const handleHomeChanged = (value: string) => {
    setEmail({ ...email, home: value });
  };
  const handleWorkChanged = (value: string) => {
    setEmail({ ...email, work: value });
  };
  const handleSaveClicked = () => {};
  const handleCancelClicked = () => {
    setEmail(customerState.email);
  };
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
        <UIButtonCancel onClick={handleCancelClicked} />
        <UIButtonSave onClick={handleSaveClicked} />
      </UIRow>
    </UISection>
  );
};

export default UIEmail;
