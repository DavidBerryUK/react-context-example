export default class EmailModel {
  work: string;
  home: string;

  constructor() {
    this.work = "";
    this.home = "";
  }

  static testData(): EmailModel {
    var model = new EmailModel();
    model.work = "john.higgs@acme.com";
    model.home = "John.higgs@aol.com";
    return model;
  }
}
