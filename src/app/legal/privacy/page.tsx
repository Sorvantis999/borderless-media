import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Borderless Media LLC.',
};

const LAST_UPDATED = 'March 9, 2026';

export default function PrivacyPage() {
  return (
    <>
      <section className="dark-section" style={{ padding: '4rem 0 3rem', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">Legal</span>
          <h1 style={{ color: 'var(--paper-on-dark)', maxWidth: '600px', marginBottom: '0.75rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--light)', fontSize: '0.85rem', fontFamily: 'var(--mono)' }}>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <LegalSection title="1. Who We Are">
              <p>Borderless Media LLC is a Minnesota limited liability company that operates this website and the affiliated publications The Long Memo and Borderless Living.</p>
              <p>This policy explains what personal information we collect, why we collect it, and how we handle it. We take the minimal-collection principle seriously: we do not collect data we do not need.</p>
            </LegalSection>

            <LegalSection title="2. Information We Collect">
              <p><strong>Contact form submissions.</strong> When you use the contact form on this site, we collect your name, email address, organization (if provided), and the content of your message. This is the primary way we collect personal information.</p>
              <p><strong>Substack subscriptions.</strong> If you subscribe to The Long Memo or Borderless Living, your subscription is handled directly by Substack, Inc. We receive subscriber email addresses and basic engagement data from Substack. Substack's own privacy policy governs how they process your data.</p>
              <p><strong>Server logs.</strong> This site is hosted on Vercel. Vercel may log standard server data including IP addresses, browser type, referring pages, and access timestamps as part of normal infrastructure operation. We do not actively review or retain this data. Vercel's privacy policy governs their data handling.</p>
              <p><strong>What we do not collect.</strong> We do not run advertising networks. We do not use tracking pixels. We do not install persistent advertising cookies. We do not collect payment information — there is no paid access to this site.</p>
            </LegalSection>

            <LegalSection title="3. How We Use Your Information">
              <p>Contact form submissions are used exclusively to respond to your inquiry. We do not add contact form submissions to marketing lists without your explicit consent.</p>
              <p>Subscriber email addresses are used to deliver the publications you subscribed to and, occasionally, to communicate directly with subscribers about editorial matters. We do not sell or share subscriber lists.</p>
            </LegalSection>

            <LegalSection title="4. Data Sharing">
              <p>We do not sell your personal information. We do not share your personal information with third parties for their marketing purposes.</p>
              <p>We may share data with service providers who assist in operating this site — currently Vercel (hosting) and Substack (publication platform). These providers are bound by their own privacy policies and data processing agreements.</p>
              <p>We may disclose information if required by law, court order, or to protect the legal rights of Borderless Media LLC.</p>
            </LegalSection>

            <LegalSection title="5. Cookies">
              <p>This site does not set advertising or analytics cookies. Vercel may set technical cookies necessary for site delivery and security. If you use the Substack subscription widget embedded on this site, Substack may set its own cookies governed by their policy.</p>
            </LegalSection>

            <LegalSection title="6. Data Retention">
              <p>Contact form messages are retained for as long as necessary to handle your inquiry and for a reasonable period thereafter for record-keeping. If you request deletion, we will remove your contact information from our records within 30 days, except where retention is required by law.</p>
            </LegalSection>

            <LegalSection title="7. Your Rights">
              <p>You may request access to, correction of, or deletion of personal information we hold about you by emailing <a href="mailto:legal@sorvantis.com" style={{ color: 'var(--slate)' }}>legal@sorvantis.com</a>. We will respond within 30 days.</p>
              <p>If you are located in the European Economic Area or United Kingdom, you may have additional rights under GDPR or UK GDPR. This site is operated from the United States and is not targeted at EEA or UK residents. If you are in one of those jurisdictions and have privacy concerns, please contact us directly.</p>
            </LegalSection>

            <LegalSection title="8. Children">
              <p>This site is intended for adults. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have collected information from a minor, we will delete it promptly.</p>
            </LegalSection>

            <LegalSection title="9. Security">
              <p>We use industry-standard technical measures to protect information in our possession. No method of transmission or storage is completely secure. We cannot guarantee absolute security, but we take reasonable precautions.</p>
            </LegalSection>

            <LegalSection title="10. Changes to This Policy">
              <p>We may update this policy. The "Last updated" date reflects the most recent revision. Material changes will be noted on this page. Continued use of the site after a change constitutes acceptance of the revised policy.</p>
            </LegalSection>

            <LegalSection title="11. Contact">
              <p>Privacy questions or requests: <a href="mailto:legal@sorvantis.com" style={{ color: 'var(--slate)' }}>legal@sorvantis.com</a></p>
            </LegalSection>
          </div>
        </div>
      </section>
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--rule)' }}>
      <h2 style={{
        fontFamily: 'var(--serif)',
        fontSize: '1.1rem',
        color: 'var(--slate)',
        marginBottom: '1rem',
        lineHeight: 1.3,
      }}>{title}</h2>
      <div style={{ fontFamily: 'var(--sans)', fontSize: '0.88rem', color: 'var(--mid)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {children}
      </div>
    </div>
  );
}
