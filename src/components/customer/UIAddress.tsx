import React, { useState } from "react";
import { useCustomerContext } from "../../contexts/customer/CustomerContext";
import UIButtonCancel from "../controls/UIButtonCancel";
import UIButtonSave from "../controls/UIButtonSave";
import UIText from "../controls/UIText";
import UIColumn from "../layout/UIColumn";
import UIRow from "../layout/UIRow";
import UISection from "../layout/UISection";

const UIAddress: React.FC = () => {
  const { state: customerState } = useCustomerContext();
  const [address, setAddress] = useState(customerState.address);

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
  const handleSaveClicked = () => {};
  const handleCancelClicked = () => {
    setAddress(customerState.address);
  };

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
        <UIButtonCancel onClick={handleCancelClicked} />
        <UIButtonSave onClick={handleSaveClicked} />
      </UIRow>
    </UISection>
  );
};

export default UIAddress;
