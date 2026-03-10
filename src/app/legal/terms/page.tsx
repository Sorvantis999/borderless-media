import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for Borderless Media and its publications.',
};

const LAST_UPDATED = 'March 9, 2026';

export default function TermsPage() {
  return (
    <>
      <section className="dark-section" style={{ padding: '4rem 0 3rem', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">Legal</span>
          <h1 style={{ color: 'var(--paper-on-dark)', maxWidth: '600px', marginBottom: '0.75rem' }}>Terms of Use</h1>
          <p style={{ color: 'var(--light)', fontSize: '0.85rem', fontFamily: 'var(--mono)' }}>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <LegalSection title="1. Parties and Scope">
              <p>These Terms of Use govern your access to and use of borderless-media.com and any subdomain or related web property operated by Borderless Media LLC, a Minnesota limited liability company ("Borderless Media," "we," "us," or "our"). By accessing or using this site, you agree to these terms in full. If you do not agree, do not use the site.</p>
              <p>These terms apply to all visitors regardless of how you access the site. They do not govern your relationship with The Long Memo or Borderless Living as Substack publications — those are governed separately by Substack's terms of service.</p>
            </LegalSection>

            <LegalSection title="2. Nature of Content — Not Advice">
              <p>Everything published on this site and through our affiliated publications is informational and analytical in nature. It is not legal advice, tax advice, financial advice, immigration advice, or investment advice. It is not tailored to your individual circumstances.</p>
              <p>The analysis we publish reflects our assessment of publicly available information and primary sources at the time of writing. It may be incomplete, subject to change, or in conflict with other credible sources. Conditions in the jurisdictions we cover change frequently.</p>
              <p><strong>No publication by Borderless Media creates a professional relationship of any kind between you and Borderless Media LLC, its principals, or its affiliates.</strong> If you require advice about your specific situation, engage a licensed attorney, tax professional, or financial advisor with jurisdiction-specific expertise.</p>
            </LegalSection>

            <LegalSection title="3. Intellectual Property">
              <p>All content published on this site — including text, analysis, frameworks, data visualizations, and editorial materials — is the property of Borderless Media LLC or its licensors and is protected by United States and international copyright law.</p>
              <p>You may share links to our content freely. You may quote brief excerpts (not to exceed 150 words) for commentary, criticism, or educational purposes, provided you attribute the source and link back to the original publication.</p>
              <p>You may not reproduce, republish, distribute, or commercially exploit our content without prior written permission. Republishing our analysis in whole — whether in print, newsletters, competing publications, AI training datasets, or other formats — is not permitted without a licensing agreement.</p>
            </LegalSection>

            <LegalSection title="4. Accuracy and Updates">
              <p>We make reasonable efforts to ensure the accuracy of what we publish, but we make no warranties, express or implied, regarding completeness, accuracy, timeliness, or fitness for any particular purpose. Country laws, immigration programs, and geopolitical conditions change. Information that was accurate when published may no longer be.</p>
              <p>Publication dates are shown on all content. Treat older content accordingly.</p>
            </LegalSection>

            <LegalSection title="5. Submissions and Pitches">
              <p>If you submit analysis, pitches, or other materials through our contact form, you grant Borderless Media LLC a non-exclusive, royalty-free license to review, edit, and publish that material, in whole or in part, with attribution. You represent that you have the right to submit the material and that it does not infringe the rights of any third party.</p>
              <p>We are not obligated to publish, compensate, or respond to any submission. Unsolicited submissions that we do not publish will not be returned.</p>
            </LegalSection>

            <LegalSection title="6. Third-Party Links and Services">
              <p>This site links to third-party services including Substack, Borderless Concierge, and Sorvantis Corporation. We do not control these services and are not responsible for their content, privacy practices, or terms. Links are provided for convenience and do not constitute endorsement of the linked site or its operators.</p>
            </LegalSection>

            <LegalSection title="7. Limitation of Liability">
              <p>To the maximum extent permitted by applicable law, Borderless Media LLC shall not be liable for any indirect, incidental, consequential, special, or exemplary damages arising from your use of this site or reliance on its content, including but not limited to financial losses, missed opportunities, or decisions made in reliance on our analysis.</p>
              <p>Our total liability for any claim arising under these terms shall not exceed one hundred U.S. dollars ($100).</p>
            </LegalSection>

            <LegalSection title="8. Governing Law">
              <p>These terms are governed by the laws of the State of Minnesota, United States, without regard to conflict-of-law principles. Any dispute arising under these terms shall be resolved in the state or federal courts located in Hennepin County, Minnesota, and you consent to personal jurisdiction in those courts.</p>
            </LegalSection>

            <LegalSection title="9. Changes to These Terms">
              <p>We may update these terms at any time. The "Last updated" date at the top of this page will reflect the most recent revision. Your continued use of the site after any change constitutes acceptance of the revised terms.</p>
            </LegalSection>

            <LegalSection title="10. Contact">
              <p>Questions about these terms: <a href="/contact" style={{ color: 'var(--slate)' }}>Contact page</a> or write to Borderless Media LLC, Woodbury, Minnesota.</p>
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
