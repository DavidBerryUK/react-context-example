import { useCustomerContext } from "../../contexts/customer/CustomerContext";
import React, { useState } from "react";
import UIButtonCancel from "../controls/UIButtonCancel";
import UIButtonSave from "../controls/UIButtonSave";
import UIColumn from "../layout/UIColumn";
import UIRow from "../layout/UIRow";
import UISection from "../layout/UISection";
import UIText from "../controls/UIText";

const UIPhone: React.FC = () => {
  const { state: customerState } = useCustomerContext();
  const [phone, setPhone] = useState(customerState.phone);

  const handleHomeChanged = (value: string) => {
    setPhone({ ...phone, home: value });
  };
  const handleWorkChanged = (value: string) => {
    setPhone({ ...phone, work: value });
  };
  const handleMobileChanged = (value: string) => {
    setPhone({ ...phone, mobile: value });
  };
  const handleSaveClicked = () => {};
  const handleCancelClicked = () => {
    setPhone(customerState.phone);
  };

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
        <UIButtonCancel onClick={handleCancelClicked} />
        <UIButtonSave onClick={handleSaveClicked} />
      </UIRow>
    </UISection>
  );
};

export default UIPhone;
