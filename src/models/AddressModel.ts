export default class AddressModel {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  postCode: string;

  constructor() {
    this.line1 = "";
    this.line2 = "";
    this.line3 = "";
    this.line4 = "";
    this.postCode = "";
  }

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
