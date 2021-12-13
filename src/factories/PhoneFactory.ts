import PhoneModel from "../models/PhoneModel";

//
// Factory class to provide
// test phone data
//
export default class PhoneFactory {

  static testData(): PhoneModel {
    var model = new PhoneModel();
    model.work = "01932 123456";
    model.home = "01332 2929192";
    model.mobile = "0710 494949";
    return model;
  }
}
