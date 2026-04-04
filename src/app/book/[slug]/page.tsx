import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BMBookingWidget from '@/components/BMBookingWidget'

const EVENT_TYPES: Record<string, {
  id: string
  name: string
  duration: number
  description: string
  questions: Array<{ id: string; label: string; type: string; required: boolean; options?: string[] }>
}> = {
  'interview': {
    id: 'bm-interview',
    name: 'Podcast / Press Interview',
    duration: 60,
    description: 'Interview booking for The Long Memo or Borderless Living. For external press inquiring about Bryan Del Monte, please select the appropriate option below.',
    questions: [
      {
        id: 'publication',
        label: 'Which publication is this for?',
        type: 'select',
        required: true,
        options: [
          'The Long Memo',
          'Borderless Living',
          'External outlet — interviewing Bryan',
          'Other',
        ],
      },
      {
        id: 'topic',
        label: 'Interview topic or focus',
        type: 'textarea',
        required: true,
      },
    ],
  },
  'partner': {
    id: 'bm-partner',
    name: 'Partnership / Editorial Call',
    duration: 30,
    description: 'Business development, content partnership, or editorial coordination with Borderless Media LLC.',
    questions: [
      {
        id: 'purpose',
        label: 'Purpose of this call',
        type: 'textarea',
        required: true,
      },
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const et = EVENT_TYPES[params.slug]
  if (!et) return { title: 'Not Found' }
  return {
    title: `${et.name} — Borderless Media`,
    description: et.description,
    robots: { index: false, follow: false },
  }
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const et = EVENT_TYPES[params.slug]
  if (!et) notFound()

  return (
    <BMBookingWidget
      brandId="bm"
      eventTypeId={et.id}
      eventTypeName={et.name}
      eventTypeSlug={params.slug}
      durationMinutes={et.duration}
      description={et.description}
      questions={et.questions}
      schedulingApiBase={process.env.NEXT_PUBLIC_SCHEDULING_API ?? 'https://scheduling.sorvantis.net'}
    />
  )
}
