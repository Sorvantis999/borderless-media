import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Research, Institutional & Press Inquiries',
  description:
    'Submit research inquiries, pitch original analysis, request institutional access, or reach press and editorial contacts at Borderless Media.',
  openGraph: {
    title: 'Contact — Research, Institutional & Press Inquiries',
    description:
      'Research inquiries, pitch submissions, institutional licensing, and press contact for Borderless Media.',
    url: 'https://borderlessmediallc.com/contact',
  },
  alternates: {
    canonical: 'https://borderlessmediallc.com/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
