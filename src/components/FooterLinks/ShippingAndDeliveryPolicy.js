import React from "react";

const ShippingAndDeliveryPolicy = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Shipping and Delivery Policy</h1>
      <p><strong>Effective Date:</strong> [Insert Date]</p>
      <p>
        At <strong>[Your Web App Name]</strong>, we strive to ensure clarity
        about our shipping and delivery process. While we currently do not ship
        physical products, we have outlined our shipping policy for transparency
        in case this changes in the future.
      </p>

      <h2>1. Shipping Timeline</h2>
      <ul>
        <li>
          Any orders placed will take up to <strong>30 days</strong> for
          processing and delivery.
        </li>
        <li>
          As of now, <strong>we do not have any physical products available for
          shipping</strong>. Updates regarding shipping availability will be
          shared on our platform as new services or products are introduced.
        </li>
      </ul>

      <h2>2. Delivery Address</h2>
      <p>
        All deliveries, if initiated in the future, will be managed from our
        registered address:
      </p>
      <address>
        <strong>Bommasandra, Omar Road</strong>
      </address>

      <h2>3. Contact Information</h2>
      <p>
        For any queries regarding shipping, delivery, or related concerns,
        please contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:developer.web.magic@gmail.com">
          developer.web.magic@gmail.com
        </a>
        <br />
        <strong>Response Time:</strong> Within 10 business days
      </p>
    </div>
  );
};

export default ShippingAndDeliveryPolicy;
