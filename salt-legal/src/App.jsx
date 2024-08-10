import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Home/Login/Login";
import SignUp from "./Component/Home/SignUp/SignUp";
import Templates from "./Component/Templates/Templates";
import About from "./Component/About/About";
import Package from "./Component/Package/Package";
import Features from "./Component/Features/Features";
import TemplateSampleDetail from "./Component/Templates/TemplateSampleDetail";
import PaymentCard from "./Component/Package/Package";
import ContactUs from "./Component/Contact/Contact";
import Newsletter from "./Component/Newsletter/Newsletter";
import ForgotPassword from "./Component/Home/ForgetPassword/ForgetPassword";
import ResetPassword from "./Component/Home/ForgetPassword/ResetPassword";
import VerifyOTP from "./Component/Home/ForgetPassword/VerifyOTP";
import ErrorPage from "./Component/NotFound/404NotFound";
import ThankYou from "./Component/Home/ThankYou/Thankyou";
import CategoryPay from "./Component/CategoryPay/CategoryPay";
import TemplateSampleVarities from "./Component/Templates/TemplateSampleVarities";
import { useAuth } from "./Component/context/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import image from "./Component/image.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            exact
            path="/reset-password/:token"
            element={<ResetPassword />}
          />
          {/* <Route path="/otp-verification/:userId" element={<VerifyOTP />} /> */}
          <Route exact path="/image" element={<image />} />
          <Route exact path="/templates" element={<Templates />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/thank-you" element={<ThankYou />} />
          <Route exact path="/package" element={<Package />} />
          <Route exact path="/category-pay" element={<CategoryPay />} />
          <Route exact path="/feature" element={<Features />} />
          <Route exact path="/newsletter" element={<Newsletter />} />
          <Route
            exact
            path="/templates/template-sample"
            element={<TemplateSampleDetail />}
          />
          <Route
            exact
            path="/templateSampleVarieties"
            element={<TemplateSampleVarities />}
          />

          {/* <Route exact path="/payment-page" element={<PaymentCard/>} /> */}
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
