import { LegalPage, LegalSection } from '../components/LegalPage';

export function Terms() {
  return (
    <LegalPage title="Terms & Conditions" effectiveDate="July 4, 2026">
      <p>
        These Terms &amp; Conditions ("Terms") govern your access to and use of the Reel Legacy
        website and your purchase of products offered through it. Reel Legacy is owned and operated
        by <strong className="text-zinc-200">Niveles Capital LLC</strong> ("Reel Legacy," "we," "us,"
        or "our"). By placing an order or otherwise using this site, you agree to these Terms. If you
        do not agree, please do not use the site or place an order.
      </p>

      <LegalSection title="1. Pre-Orders">
        <p>
          At launch on July 4, 2026, all products offered on this site are sold on a{' '}
          <strong className="text-zinc-200">pre-order</strong> basis. A pre-order reserves your item
          from an upcoming production run. Because inventory is produced to meet pre-order demand,
          quantities, colors, and sizes may be limited and are not guaranteed until your order is
          confirmed.
        </p>
        <p>
          Placing a pre-order authorizes us to charge your payment method at the time the order is
          submitted, unless stated otherwise at checkout.
        </p>
      </LegalSection>

      <LegalSection title="2. Pre-Order Discount">
        <p>
          As part of our launch, every customer who places a pre-order receives{' '}
          <strong className="text-zinc-200">20% off</strong> their pre-order. The discount is applied
          automatically at checkout during the pre-order period and cannot be combined with other
          offers unless expressly stated. We reserve the right to modify or end the pre-order discount
          at any time; changes will not affect orders already placed.
        </p>
      </LegalSection>

      <LegalSection title="3. Shipping & Delivery Timeline">
        <p>
          Because these are newly produced items undergoing quality assurance, pre-orders ship on an
          extended timeline so that every order is fulfilled correctly. Orders are processed and
          fulfilled within <strong className="text-zinc-200">thirty (30) days</strong> of the order
          date.
        </p>
        <p>
          Estimated delivery is approximately <strong className="text-zinc-200">three (3) weeks</strong>{' '}
          from the order date and may take up to thirty (30) days. These timeframes are good-faith
          estimates and are not guaranteed. Delivery times may be affected by carrier delays,
          production timing, or circumstances beyond our control. We will provide tracking information
          once your order ships.
        </p>
      </LegalSection>

      <LegalSection title="4. Pricing & Payment">
        <p>
          All prices are listed in U.S. dollars and are subject to change without notice. Applicable
          taxes and shipping charges, if any, are calculated at checkout. You represent that you are
          authorized to use the payment method you provide. If your payment cannot be processed or is
          later reversed, we may cancel or hold your order.
        </p>
      </LegalSection>

      <LegalSection title="5. Order Cancellations & Changes">
        <p>
          Because pre-orders drive production planning, cancellation or change requests must be
          submitted promptly. Contact us as soon as possible and we will do our best to accommodate
          your request before the order enters fulfillment. Once an order has been processed for
          fulfillment, it may no longer be eligible for cancellation or modification.
        </p>
      </LegalSection>

      <LegalSection title="6. Returns & Refunds">
        <p>
          We stand behind the quality of our products. If your item arrives damaged, defective, or
          incorrect, contact us within a reasonable period after delivery and we will work with you on
          a replacement or refund. Items must be unused and in their original condition unless the
          issue is a defect on our part. Certain items may be final sale where noted.
        </p>
      </LegalSection>

      <LegalSection title="7. Product Descriptions">
        <p>
          We strive to display our products and their colors as accurately as possible. However, we do
          not warrant that product descriptions, imagery, sizing, or other content is complete,
          current, or error-free, and actual colors may vary based on your device's display.
        </p>
      </LegalSection>

      <LegalSection title="8. Intellectual Property">
        <p>
          All content on this site — including the Reel Legacy name, logos, designs, graphics, and
          media — is the property of Niveles Capital LLC or its licensors and is protected by
          applicable intellectual property laws. You may not use, reproduce, or distribute any content
          without our prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="9. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Niveles Capital LLC and Reel Legacy shall not be
          liable for any indirect, incidental, special, or consequential damages arising from your use
          of the site or your purchase of any product. Our total liability for any claim shall not
          exceed the amount you paid for the product giving rise to the claim.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to These Terms">
        <p>
          We may update these Terms from time to time. The version in effect on the date of your order
          governs that order. Continued use of the site after changes are posted constitutes
          acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing Law">
        <p>
          These Terms are governed by the laws of the state in which Niveles Capital LLC is organized,
          without regard to its conflict-of-laws principles. Any disputes shall be resolved in the
          courts located in that jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact Us">
        <p>
          Questions about these Terms or your order? Reach us at{' '}
          <a href="mailto:support@reellegacy.com" className="text-white underline underline-offset-4 hover:text-zinc-300">
            support@reellegacy.com
          </a>
          . Reel Legacy is operated by Niveles Capital LLC.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
