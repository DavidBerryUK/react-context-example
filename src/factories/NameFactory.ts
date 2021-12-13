import NameModel from "../models/NameModel";

//
// Factory class to provide
// test name data
//
export default class NameFactory {

  static testData(): NameModel {
    var model = new NameModel();
    model.title = "Mr";
    model.forename = "John";
    model.surname = "Higgs";
    return model;
  }
}
