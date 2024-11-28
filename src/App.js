import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebMagicAPP from "./components/WebMagicAPP";
import TermsAndConditions from "./components/FooterLinks/TermsAndConditions";
import RefundAndCancellationPolicy from "./components/FooterLinks/RefundAndCancellationPolicy";
import ShippingAndDeliveryPolicy from "./components/FooterLinks/ShippingAndDeliveryPolicy";
import ContactUs from "./components/FooterLinks/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WebMagicAPP />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-and-cancellation-policy" element={<RefundAndCancellationPolicy />} />
          <Route path="/shipping-and-delivery-policy" element={<ShippingAndDeliveryPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
