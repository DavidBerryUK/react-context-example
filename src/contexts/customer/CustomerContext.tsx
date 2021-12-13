import AddressFactory from "../../factories/AddressFactory";
import AddressModel from "../../models/AddressModel";
import EmailFactory from "../../factories/EmailFactory";
import EmailModel from "../../models/EmailModel";
import NameFactory from "../../factories/NameFactory";
import NameModel from "../../models/NameModel";
import PhoneFactory from "../../factories/PhoneFactory";
import PhoneModel from "../../models/PhoneModel";
import React, { Dispatch, Reducer } from "react";

//
// Customer Context.
// Hold details about a customer in memory that
// can be easily accessed and updated by ReactJS components
//

// Interface defining data structure stored in this context
export interface ICustomerContextProps {
  name: NameModel;
  address: AddressModel;
  phone: PhoneModel;
  email: EmailModel;
}

// Interface for command classes that will update
// the context state. The execution method is called
// by the reducer which is invoked by the dispatcher
export interface ICustomerContextDispatchCommand {
  execute(state: ICustomerContextProps): ICustomerContextProps;
}

// Strongly type interface for updating this context, which is done by using
// commands which support the ICustomerContextDispatchCommand interface
export interface InitContextProps {
  state: ICustomerContextProps;
  dispatch: Dispatch<ICustomerContextDispatchCommand>;
}

// Set the initial state of this context by creating new models
const initialState: ICustomerContextProps = {
  name: NameFactory.testData(),
  address: AddressFactory.testData(),
  phone: PhoneFactory.testData(),
  email: EmailFactory.testData(),
};

// The reducer updates the data held in the context.
// All updates are done by passing in strongly typed command classes that are defined in the command folder.
// A command classes type determines what will be updated, and the class also holds a copy
// of the data that will be updated
const reducer: Reducer<ICustomerContextProps, ICustomerContextDispatchCommand> = (state, command) => {
  //
  // each command updates the context state, this ensures that this files does not grow
  // as the list of commands grow. Also commands can be individually unit tested
  //
  return command.execute(state);
};

// Create the actual context
//
const CustomerContext = React.createContext({} as InitContextProps);

// Provide function to provide the context to the Customer,
//  basically this defines a new HTML Tag that wraps any lower components
//  that need to access the context.
//
export function CustomerContextProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <CustomerContext.Provider value={value}>{props.children}</CustomerContext.Provider>;
}

// Export the context
export const CustomerContextConsumer = CustomerContext.Consumer;
export default CustomerContext;

// Helper Function to access context from other functions and components
export const useCustomerContext = () => {
  const context = React.useContext(CustomerContext);
  return context;
};
