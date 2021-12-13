import { ICustomerContextProps } from "../../CustomerContext";
import AddressModel from "../../../../models/AddressModel";
import CommandSetAddress from "../CommandSetAddress";
import EmailModel from "../../../../models/EmailModel";
import NameModel from "../../../../models/NameModel";
import PhoneModel from "../../../../models/PhoneModel";

//
// test the CommandSetAddress updates to context correctly
//
describe('Update Context With Address', () => {

    test('Create Address', () => {

        // Arrange
        //
        var context: ICustomerContextProps = {
            name: new NameModel(),
            address: new AddressModel(),
            phone: new PhoneModel(),
            email: new EmailModel()
        }
        const command = new CommandSetAddress("Sheep Farm", "Hill Top Lane", "Quaint Village", "Yorkshire", "YS1 1QV");

        // Act
        context = command.execute(context);

        // Assert
        expect(context.address.line1).toBe("Sheep Farm");
        expect(context.address.line2).toBe("Hill Top Lane");
        expect(context.address.line3).toBe("Quaint Village");
        expect(context.address.line4).toBe("Yorkshire");
        expect(context.address.postCode).toBe("YS1 1QV");
    });

})