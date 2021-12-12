import NameModel from "../../../models/NameModel";
import { CustomerContextProps, ICustomerContextDispatchCommand } from "../CustomerContext";

//
export default class CommandSetName implements ICustomerContextDispatchCommand {
  title: string;
  forename: string;
  surname: string;

  // Create the command with all data needed to update
  //  the state
  constructor(title: string, forename: string, surname: string) {
    this.title = title;
    this.forename = forename;
    this.surname = surname;
  }

  // Update the context and return the new state
  // (this is called from within the ApplicationContext)
  execute(state: CustomerContextProps): CustomerContextProps {
    const name = new NameModel();
    name.title = this.title;
    name.forename = this.forename;
    name.surname = this.surname;

    return {
      ...state,
      name: name,
    };
  }
}
