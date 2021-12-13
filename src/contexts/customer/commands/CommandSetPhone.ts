import { ICustomerContextProps, ICustomerContextDispatchCommand } from "../CustomerContext";
import PhoneModel from "../../../models/PhoneModel";

//
// Command to update the Customer Context Phone Details
//
export default class CommandSetPhone implements ICustomerContextDispatchCommand {
  readonly work: string;
  readonly home: string;
  readonly mobile: string;

  // Create the command with all data needed to update
  //  the state
  constructor(work: string, home: string, mobile: string) {
    this.work = work;
    this.home = home;
    this.mobile = mobile;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ICustomerContextProps): ICustomerContextProps {
    const phone = new PhoneModel();
    phone.work = this.work;
    phone.home = this.home;
    phone.mobile = this.mobile;

    return {
      ...state,
      phone: phone,
    };
  }
}
