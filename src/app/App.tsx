import UICustomer from "../components/customer/UICustomer";
import { CustomerContextProvider } from "../contexts/customer/CustomerContext";

function App() {
  return (
    <div>
      <CustomerContextProvider>
        <UICustomer />
      </CustomerContextProvider>
    </div>
  );
}

export default App;
