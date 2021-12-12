export default class PhoneModel {
  work: string;
  home: string;
  mobile: string;
  constructor() {
    this.work = "";
    this.home = "";
    this.mobile = "";
  }

  static testData(): PhoneModel {
    var model = new PhoneModel();
    model.work = "01932 123456";
    model.home = "01332 2929192";
    model.mobile = "0710 494949";
    return model;
  }
}
