import { ICustomerContextProps } from "../../CustomerContext";
import AddressModel from "../../../../models/AddressModel";
import CommandSetEmail from "../CommandSetEmail";
import EmailModel from "../../../../models/EmailModel";
import NameModel from "../../../../models/NameModel";
import PhoneModel from "../../../../models/PhoneModel";

//
// test the CommandSetEmail updates to context correctly
//
describe('Update Context With Email', () => {

    test('Create Email', () => {

        // Arrange
        //
        var context: ICustomerContextProps = {
            name: new NameModel(),
            address: new AddressModel(),
            phone: new PhoneModel(),
            email: new EmailModel()
        }
        const command = new CommandSetEmail("work@gmail.com", "home@gmail.com");

        // Act
        context = command.execute(context);

        // Assert
        expect(context.email.work).toBe("work@gmail.com");
        expect(context.email.home).toBe("home@gmail.com");
    });
})