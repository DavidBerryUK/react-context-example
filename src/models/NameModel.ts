export default class NameModel {
  title: string;
  forename: string;
  surname: string;

  constructor() {
    this.title = "";
    this.forename = "";
    this.surname = "";
  }

  static testData(): NameModel {
    var model = new NameModel();
    model.title = "Mr";
    model.forename = "John";
    model.surname = "Higgs";
    return model;
  }
}
