import { ICustomerContextProps } from "../../CustomerContext";
import AddressModel from "../../../../models/AddressModel";
import CommandSetName from "../CommandSetName";
import EmailModel from "../../../../models/EmailModel";
import NameModel from "../../../../models/NameModel";
import PhoneModel from "../../../../models/PhoneModel";

//
// test the CommandSetName updates to context correctly
//
describe('Update Context With Name', () => {

    test('Create Name', () => {

        // Arrange
        //
        var context: ICustomerContextProps = {
            name: new NameModel(),
            address: new AddressModel(),
            phone: new PhoneModel(),
            email: new EmailModel()
        }
        const command = new CommandSetName("Mr", "Ben", "Sherman");

        // Act
        context = command.execute(context);

        // Assert
        expect(context.name.title).toBe("Mr");
        expect(context.name.forename).toBe("Ben");
        expect(context.name.surname).toBe("Sherman");
    });

})