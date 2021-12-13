import { ICustomerContextProps, ICustomerContextDispatchCommand } from "../CustomerContext";
import EmailModel from "../../../models/EmailModel";

//
// Command to update the Customer Context Email Details
//
export default class CommandSetEmail implements ICustomerContextDispatchCommand {
  readonly work: string;
  readonly home: string;

  // Create the command with all data needed to update
  //  the state
  constructor(work: string, home: string) {
    this.work = work;
    this.home = home;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: ICustomerContextProps): ICustomerContextProps {
    const email = new EmailModel();
    email.work = this.work;
    email.home = this.home;

    return {
      ...state,
      email: email,
    };
  }
}
