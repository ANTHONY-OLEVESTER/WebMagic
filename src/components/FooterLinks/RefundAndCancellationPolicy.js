import React from "react";

const RefundAndCancellationPolicy = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Refund and Cancellation Policy</h1>
      <p><strong>Effective Date:</strong> 29-11-2024</p>
      <p>
        At <strong>Web Magic</strong>, we value your trust and aim to provide the best service possible. 
        Please read this policy carefully to understand our stance on refunds and cancellations.
      </p>

      <h2>1. No Return Policy</h2>
      <p>
        All sales and transactions made on Web Magic are final. We do not offer 
        refunds, returns, or exchanges for any products or services purchased 
        through our platform, except where required by law.
      </p>

      <h3>1.1 Exceptions</h3>
      <p>
        In rare cases where technical errors or issues directly caused by our 
        platform impact your purchase, please contact us within 10 days of the transaction 
        to discuss potential resolutions. Such cases will be reviewed at our sole discretion.
      </p>

      <h2>2. Cancellation Policy</h2>
      <h3>2.1 Subscription Cancellations</h3>
      <ul>
        <li>
          Users may cancel their subscriptions at any time through account settings 
          or by contacting support at{" "}
          <a href="mailto:developer.web.magic@gmail.com">
            developer.web.magic@gmail.com
          </a>.
        </li>
        <li>
          Cancellations will take effect at the end of the current billing cycle. 
          No partial refunds will be issued for unused subscription periods.
        </li>
      </ul>

      <h3>2.2 Event or Booking Cancellations</h3>
      <ul>
        <li>
          Cancellations for events or bookings must be made at least 48 hours in 
          advance to qualify for rescheduling. No refunds will be issued.
        </li>
      </ul>

      <h2>3. Contact Information</h2>
      <p>
        If you have any questions or concerns, please reach out to us at:
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

export default RefundAndCancellationPolicy;
