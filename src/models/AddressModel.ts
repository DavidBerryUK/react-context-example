//
// Customer Address Data Model
//
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
}
