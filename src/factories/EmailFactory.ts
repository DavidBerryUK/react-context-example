import EmailModel from "../models/EmailModel";

//
// Factory class to provide
// test email data
//
export default class EmailFactory {

  static testData(): EmailModel {
    var model = new EmailModel();
    model.work = "john.higgs@acme.com";
    model.home = "John.higgs@aol.com";
    return model;
  }
}
