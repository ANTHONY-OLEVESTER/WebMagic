// components/TermsAndConditions.js
import React from "react";

const TermsAndConditions = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Terms and Conditions</h1>
      <p>Effective Date: [Insert Date]</p>
      <p>
        Welcome to [Your Website Name]! These Terms and Conditions outline the
        rules and regulations for the use of our website and services. By
        accessing this website and/or subscribing to our services, you accept
        these terms in full. If you disagree with any part of these terms,
        please do not use our website or services.
      </p>

      <h2>1. Definitions</h2>
      <p>
        <strong>"Website"</strong> refers to [Your Website Name] and all
        associated pages.
      </p>
      <p>
        <strong>"Service"</strong> refers to the account and subscription
        offerings provided through our Website.
      </p>
      <p>
        <strong>"User"</strong> refers to any individual who accesses our
        Website or uses our Service.
      </p>

      <h2>2. Accounts</h2>
      <ul>
        <li>
          Users must register for an account to access certain features of the
          Website or Service.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account credentials and agree to notify us immediately of any
          unauthorized access.
        </li>
        <li>Accounts are non-transferable and must be used by the registered User only.</li>
      </ul>

      <h2>3. Subscriptions</h2>
      <ul>
        <li>Subscriptions provide access to premium features or content.</li>
        <li>
          Subscription fees, terms, and renewal policies are outlined on the
          subscription page. By subscribing, you agree to pay the applicable
          fees.
        </li>
        <li>
          Cancellations: Users may cancel their subscriptions at any time.
          Refunds will be provided as per our refund policy.
        </li>
      </ul>

      {/* Add more sections as needed */}
    </div>
  );
};

export default TermsAndConditions;
