import "./output.css";
import { Route, Routes } from "react-router-dom";
import Context from "./Context/Context";
/////pages/////////////////////////////////////////////////////////////////////////////
import Dashboard from "./Components/pages/dashboard/pages/Dashboard";
import Home from "./Components/pages/Home/Home";
import Products from "./Components/pages/Products/Products";
import Contact from "./Components/pages/Contact/Contact";
import About from "./Components/pages/About/About";
import SignInPage from "./Components/pages/signIn/SignInPage";
import SignUpPage from "./Components/pages/singUp/SignUpPage";
import Customer from "./Components/pages/dashboard/pages/Customer";
import Message from "./Components/pages/dashboard/pages/Message";
import Help from "./Components/pages/dashboard/pages/Help";
import Setting from "./Components/pages/dashboard/pages/Setting";
import Password from "./Components/pages/dashboard/pages/Password";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";

function App() {

  return (
    <Context>
      <Routes>
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
          <Route path="message" element={<Message />} />
          <Route path="help" element={<Help />} />
          <Route path="setting" element={<Setting />} />
          <Route path="password" element={<Password />} />
        </Route>

      </Routes>
    </Context>
  );
}

export default App;
