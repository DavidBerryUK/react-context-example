import AddressModel from "../models/AddressModel";

//
// Factory class to provide
// test address data
//
export default class AddressFactory {

  static testData(): AddressModel {
    var model = new AddressModel();
    model.line1 = "4 Privet Drive";
    model.line2 = "Little Whining";
    model.line3 = "Shipley Bridge";
    model.line4 = "Surrey";
    model.postCode = "SUR1 4WN";
    return model;
  }
}
