import { LegalPage, LegalSection } from '../components/LegalPage';

export function Privacy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="July 4, 2026">
      <p>
        This Privacy Policy explains how <strong className="text-zinc-200">Niveles Capital LLC</strong>{' '}
        ("Reel Legacy," "we," "us," or "our") collects, uses, and protects your information when you
        use the Reel Legacy website and place an order. By using the site, you agree to the practices
        described here.
      </p>

      <LegalSection title="1. Information We Collect">
        <p>We collect information you provide directly and information collected automatically:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-zinc-600">
          <li>
            <strong className="text-zinc-200">Order &amp; contact information</strong> — name, email
            address, shipping and billing address, and phone number.
          </li>
          <li>
            <strong className="text-zinc-200">Payment information</strong> — processed securely by our
            third-party payment processor. We do not store full payment card numbers on our servers.
          </li>
          <li>
            <strong className="text-zinc-200">Usage data</strong> — device, browser, pages viewed, and
            similar analytics collected automatically through cookies and comparable technologies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-zinc-600">
          <li>process, fulfill, and deliver your pre-orders and orders;</li>
          <li>send order confirmations, shipping updates, and customer-service communications;</li>
          <li>send marketing emails where you have opted in (you can unsubscribe at any time);</li>
          <li>improve our site, products, and customer experience; and</li>
          <li>prevent fraud and comply with legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Share Information">
        <p>
          We do not sell your personal information. We share it only with service providers who help us
          operate — such as payment processors, shipping carriers, and email/analytics providers — and
          only as needed to perform those services. We may also disclose information when required by
          law or to protect our rights.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies">
        <p>
          We use cookies and similar technologies to keep your cart working, understand site usage, and
          improve performance. You can control cookies through your browser settings, though some
          features may not function properly if cookies are disabled.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Retention & Security">
        <p>
          We retain your information for as long as needed to fulfill orders, comply with legal
          obligations, and support our business. We use reasonable administrative and technical
          safeguards to protect your information, though no method of transmission or storage is
          completely secure.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>
          Depending on where you live, you may have the right to access, correct, or delete your
          personal information, or to opt out of certain uses. To make a request, contact us using the
          details below. We will respond in accordance with applicable law.
        </p>
      </LegalSection>

      <LegalSection title="7. Children's Privacy">
        <p>
          Our site is not directed to children under 13, and we do not knowingly collect personal
          information from them. If you believe a child has provided us information, please contact us
          and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The "Effective" date above reflects the
          most recent version. Continued use of the site after changes are posted constitutes
          acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact Us">
        <p>
          Questions about this Privacy Policy or your data? Reach us at{' '}
          <a href="mailto:support@reellegacy.com" className="text-white underline underline-offset-4 hover:text-zinc-300">
            support@reellegacy.com
          </a>
          . Reel Legacy is operated by Niveles Capital LLC.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
