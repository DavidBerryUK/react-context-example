import { ICustomerContextProps } from "../../CustomerContext";
import AddressModel from "../../../../models/AddressModel";
import CommandSetPhone from "../CommandSetPhone";
import EmailModel from "../../../../models/EmailModel";
import NameModel from "../../../../models/NameModel";
import PhoneModel from "../../../../models/PhoneModel";

//
// test the CommandSetPhone updates to context correctly
//
describe('Update Context With Phone', () => {

    test('Create Phone', () => {

        // Arrange
        //
        var context: ICustomerContextProps = {
            name: new NameModel(),
            address: new AddressModel(),
            phone: new PhoneModel(),
            email: new EmailModel()
        }
        const command = new CommandSetPhone("work 1111", "home 2222", "mobile 1111");

        // Act
        context = command.execute(context);

        // Assert
        expect(context.phone.work).toBe("work 1111");
        expect(context.phone.home).toBe("home 2222");
        expect(context.phone.mobile).toBe("mobile 1111");

    });

})