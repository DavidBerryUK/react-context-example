import { ICustomerContextProps, ICustomerContextDispatchCommand } from "../CustomerContext";
import AddressModel from "../../../models/AddressModel";

//
// Command to update the Customer Context Address Details
//
export default class CommandSetAddress implements ICustomerContextDispatchCommand {
  readonly line1: string;
  readonly line2: string;
  readonly line3: string;
  readonly line4: string;
  readonly postCode: string;

  // Create the command with all data needed to update
  //  the state
  constructor(line1: string, line2: string, line3: string, line4: string, postCode: string) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line4 = line4;
    this.postCode = postCode;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ICustomerContextProps): ICustomerContextProps {
    const address = new AddressModel();
    address.line1 = this.line1;
    address.line2 = this.line2;
    address.line3 = this.line3;
    address.line4 = this.line4;
    address.postCode = this.postCode

    return {
      ...state,
      address: address,
    };
  }
}
