'use client'

import { useState, useEffect, useCallback } from 'react'

interface Question {
  id: string; label: string; type: string; required: boolean; options?: string[]
}
interface Slot { start: string; end: string }
interface Props {
  brandId: string
  eventTypeId: string
  eventTypeName: string
  eventTypeSlug: string
  durationMinutes: number
  description: string
  questions: Question[]
  schedulingApiBase: string
}
type Step = 'pick' | 'form' | 'confirm'

const TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone

function formatDateLong(ymd: string) {
  return new Date(ymd + 'T12:00:00Z').toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'
  })
}
function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: TIMEZONE })
}
function formatTimeZone(iso: string) {
  return new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short', timeZone: TIMEZONE })
}
function toYMD(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa']

// BM design tokens
const INP = `
  w-full bg-white border border-[var(--rule)] px-3 py-2.5
  font-sans text-[13px] font-light text-[var(--ink)]
  placeholder:text-[var(--light)] focus:outline-none
  focus:border-[var(--slate)] transition-colors
`.replace(/\s+/g, ' ').trim()

const LBL = `block font-sans text-[9px] tracking-[0.18em] uppercase text-[var(--mid)] mb-1.5`

export default function BMBookingWidget({
  brandId, eventTypeId, eventTypeName, durationMinutes, description, questions, schedulingApiBase
}: Props) {
  const today = new Date()
  const todayYMD = toYMD(today)

  const [calYear, setCalYear]   = useState(today.getFullYear())
  const [calMonth, setCalMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<string|null>(null)
  const [availableDates, setAvailableDates] = useState<Set<string>>(new Set())
  const [loadingCal, setLoadingCal] = useState(false)

  const [slots, setSlots]           = useState<Slot[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<Slot|null>(null)

  const [step, setStep] = useState<Step>('pick')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [guestEmail, setGuestEmail] = useState('')
  const [countryCode, setCountryCode] = useState('+1')
  const [localPhone, setLocalPhone]   = useState('')
  const guestPhone = `${countryCode}${localPhone.replace(/\D/g, '')}`
  const [answers, setAnswers] = useState<Record<string,string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string|null>(null)
  const [confirmation, setConfirmation] = useState<any>(null)

  const fetchMonthAvail = useCallback(async (y: number, m: number) => {
    setLoadingCal(true)
    try {
      const r = await fetch(`${schedulingApiBase}/api/month-availability?brand=${brandId}&eventType=${eventTypeId}&year=${y}&month=${m+1}&timezone=${encodeURIComponent(TIMEZONE)}`)
      const d = await r.json()
      setAvailableDates(new Set(d.available ?? []))
    } catch { setAvailableDates(new Set()) }
    finally { setLoadingCal(false) }
  }, [brandId, eventTypeId, schedulingApiBase])

  useEffect(() => { fetchMonthAvail(calYear, calMonth) }, [calYear, calMonth, fetchMonthAvail])

  const fetchSlots = useCallback(async (date: string) => {
    setLoadingSlots(true); setSlots([])
    try {
      const r = await fetch(`${schedulingApiBase}/api/availability?brand=${brandId}&eventType=${eventTypeId}&date=${date}&timezone=${encodeURIComponent(TIMEZONE)}`)
      const d = await r.json()
      setSlots(d.slots ?? [])
    } catch { setSlots([]) }
    finally { setLoadingSlots(false) }
  }, [brandId, eventTypeId, schedulingApiBase])

  const selectDate = (ymd: string) => { setSelectedDate(ymd); setSelectedSlot(null); fetchSlots(ymd) }
  const selectSlot = (s: Slot) => { setSelectedSlot(s); setStep('form') }

  const submit = async () => {
    if (!selectedSlot || !firstName.trim() || !lastName.trim() || !guestEmail.trim() || !guestPhone.trim()) return
    setSubmitting(true); setSubmitError(null)
    try {
      const r = await fetch(`${schedulingApiBase}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brandId, eventTypeId, slotStart: selectedSlot.start, firstName: firstName.trim(), lastName: lastName.trim(), guestEmail: guestEmail.trim(), guestPhone: guestPhone.trim(), answers, timezone: TIMEZONE })
      })
      const d = await r.json()
      if (!r.ok) { setSubmitError(d.error ?? 'Booking failed. Please try again.'); return }
      setConfirmation(d); setStep('confirm')
    } catch { setSubmitError('Network error. Please try again.') }
    finally { setSubmitting(false) }
  }

  // Calendar grid
  const firstDow = new Date(calYear, calMonth, 1).getDay()
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate()
  const isCurrentMonth = calYear === today.getFullYear() && calMonth === today.getMonth()

  // Group slots
  const amSlots = slots.filter(s => {
    const h = parseInt(new Date(s.start).toLocaleString('en-US', { hour: 'numeric', hour12: false, timeZone: TIMEZONE }))
    return h < 12
  })
  const pmSlots = slots.filter(s => {
    const h = parseInt(new Date(s.start).toLocaleString('en-US', { hour: 'numeric', hour12: false, timeZone: TIMEZONE }))
    return h >= 12
  })

  // ── Confirmation ───────────────────────────────────────────────────────────
  if (step === 'confirm' && confirmation) return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '60px 16px' }}>
      <div style={{ maxWidth: 520, width: '100%' }}>
        <div style={{ borderBottom: '1px solid var(--rule)', paddingBottom: 24, marginBottom: 32 }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--slate)', margin: '0 0 12px' }}>Borderless Media</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, color: 'var(--ink)', margin: '0 0 6px' }}>Confirmed</h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 300, color: 'var(--mid)', margin: 0 }}>A confirmation has been sent to {confirmation.guestEmail}</p>
        </div>
        <div style={{ background: 'white', border: '1px solid var(--rule)', padding: '20px 24px', marginBottom: 24 }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--mid)', margin: '0 0 12px' }}>Meeting details</p>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--ink)', margin: '0 0 4px' }}>{eventTypeName}</p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 300, color: 'var(--ink)', margin: '0 0 4px' }}>{selectedDate && formatDateLong(selectedDate)}</p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 300, color: 'var(--mid)', margin: 0 }}>{formatTimeZone(confirmation.start)} · {durationMinutes} minutes</p>
        </div>
        {confirmation.joinUrl && (
          <a href={confirmation.joinUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '10px 20px', background: 'var(--slate)', color: 'white', fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', marginBottom: 20 }}>
            Join Microsoft Teams →
          </a>
        )}
        <p style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--light)', margin: 0 }}>Ref: {confirmation.bookingId?.slice(0,8).toUpperCase()}</p>
      </div>
    </div>
  )

  // ── Form ───────────────────────────────────────────────────────────────────
  if (step === 'form' && selectedSlot && selectedDate) return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '60px 16px' }}>
      <div style={{ maxWidth: 520, width: '100%' }}>
        <div style={{ borderBottom: '1px solid var(--rule)', paddingBottom: 24, marginBottom: 32 }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--slate)', margin: '0 0 12px' }}>Borderless Media</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, color: 'var(--ink)', margin: '0 0 6px' }}>{eventTypeName}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 300, color: 'var(--mid)' }}>{formatDateLong(selectedDate)}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--rule)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 300, color: 'var(--mid)' }}>{formatTimeZone(selectedSlot.start)}</span>
            <button onClick={() => setStep('pick')} style={{ fontFamily: 'var(--sans)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>— Change</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
          <div><label className={LBL}>First Name *</label><input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} className={INP} placeholder="First name" /></div>
          <div><label className={LBL}>Last Name *</label><input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} className={INP} placeholder="Last name" /></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
          <div><label className={LBL}>Email *</label><input type="email" value={guestEmail} onChange={e=>setGuestEmail(e.target.value)} className={INP} placeholder="your@email.com" /></div>
          <div>
            <label className={LBL}>Phone *</label>
            <div style={{ display: 'flex' }}>
              <select value={countryCode} onChange={e=>setCountryCode(e.target.value)}
                style={{ width: 72, flexShrink: 0, background: 'white', border: '1px solid var(--rule)', borderRight: 'none', padding: '0 6px', fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 300, color: 'var(--ink)', outline: 'none', appearance: 'none', textAlign: 'center' }}>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
                <option value="+64">+64</option>
                <option value="+33">+33</option>
                <option value="+49">+49</option>
                <option value="+39">+39</option>
                <option value="+34">+34</option>
                <option value="+41">+41</option>
                <option value="+31">+31</option>
                <option value="+351">+351</option>
                <option value="+52">+52</option>
                <option value="+55">+55</option>
                <option value="+65">+65</option>
                <option value="+852">+852</option>
                <option value="+971">+971</option>
                <option value="+81">+81</option>
              </select>
              <input type="tel" value={localPhone} onChange={e=>setLocalPhone(e.target.value)}
                style={{ flex: 1, minWidth: 0, background: 'white', border: '1px solid var(--rule)', padding: '0 12px', fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 300, color: 'var(--ink)', outline: 'none', height: 42 }}
                placeholder="(555) 000-0000" />
            </div>
          </div>
        </div>

        {questions.map(q => (
          <div key={q.id} style={{ marginBottom: 12 }}>
            <label className={LBL}>{q.label}{q.required && ' *'}</label>
            {q.type === 'select' && q.options ? (
              <select value={answers[q.id]??''} onChange={e=>setAnswers(a=>({...a,[q.id]:e.target.value}))} className={INP} style={{ appearance: 'none' }}>
                <option value="">Select…</option>
                {q.options.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : q.type === 'textarea' ? (
              <textarea value={answers[q.id]??''} onChange={e=>setAnswers(a=>({...a,[q.id]:e.target.value}))} className={INP} rows={3} style={{ resize: 'vertical', lineHeight: 1.6 }} />
            ) : (
              <input type="text" value={answers[q.id]??''} onChange={e=>setAnswers(a=>({...a,[q.id]:e.target.value}))} className={INP} />
            )}
          </div>
        ))}

        {submitError && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', padding: '10px 14px', fontFamily: 'var(--sans)', fontSize: 12, marginBottom: 16 }}>
            {submitError}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--rule)' }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--light)' }}>{TIMEZONE.replace('_',' ')}</span>
          <button onClick={submit}
            disabled={submitting || !firstName.trim() || !lastName.trim() || !guestEmail.trim() || !guestPhone.trim()}
            style={{
              padding: '10px 24px',
              background: submitting || !firstName.trim() || !lastName.trim() || !guestEmail.trim() || !guestPhone.trim() ? 'var(--rule)' : 'var(--slate)',
              color: 'white',
              border: 'none',
              fontFamily: 'var(--sans)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: submitting || !firstName.trim() || !lastName.trim() || !guestEmail.trim() || !guestPhone.trim() ? 'not-allowed' : 'pointer',
              transition: 'background 0.15s',
            }}>
            {submitting ? 'Scheduling…' : 'Confirm booking'}
          </button>
        </div>
      </div>
    </div>
  )

  // ── Calendar + slot picker ─────────────────────────────────────────────────
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '60px 16px' }}>
      <div style={{ maxWidth: 520, width: '100%' }}>
        {/* Header */}
        <div style={{ borderBottom: '1px solid var(--rule)', paddingBottom: 24, marginBottom: 32 }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--slate)', margin: '0 0 12px' }}>Borderless Media</p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, color: 'var(--ink)', margin: '0 0 8px' }}>{eventTypeName}</h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 300, color: 'var(--mid)', margin: '0 0 6px' }}>{durationMinutes} min · Video call</p>
          {description && <p style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 300, color: 'var(--mid)', margin: '12px 0 0', lineHeight: 1.65, fontStyle: 'italic' }}>{description}</p>}
        </div>

        {/* Calendar */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <button onClick={() => { if (calMonth === 0) { setCalYear(y=>y-1); setCalMonth(11) } else setCalMonth(m=>m-1) }}
              disabled={isCurrentMonth}
              style={{ background: 'none', border: '1px solid var(--rule)', color: 'var(--ink)', width: 28, height: 28, cursor: isCurrentMonth ? 'not-allowed' : 'pointer', opacity: isCurrentMonth ? 0.3 : 1, fontSize: 14 }}>‹</button>
            <span style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500, color: 'var(--ink)', letterSpacing: '0.04em' }}>{MONTHS[calMonth]} {calYear}</span>
            <button onClick={() => { if (calMonth === 11) { setCalYear(y=>y+1); setCalMonth(0) } else setCalMonth(m=>m+1) }}
              style={{ background: 'none', border: '1px solid var(--rule)', color: 'var(--ink)', width: 28, height: 28, cursor: 'pointer', fontSize: 14 }}>›</button>
          </div>

          {loadingCal ? (
            <p style={{ textAlign: 'center', padding: '32px 0', fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--light)' }}>Loading availability…</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
              {DAYS.map(d => (
                <div key={d} style={{ textAlign: 'center', fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--light)', paddingBottom: 8 }}>{d}</div>
              ))}
              {Array.from({ length: firstDow }, (_, i) => <div key={`e${i}`} />)}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const d = i + 1
                const ymd = `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`
                const isPast = ymd < todayYMD
                const isAvail = availableDates.has(ymd)
                const isSelected = ymd === selectedDate
                const isToday = ymd === todayYMD

                return (
                  <div key={ymd} onClick={() => !isPast && isAvail && selectDate(ymd)}
                    style={{
                      aspectRatio: '1',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--sans)', fontSize: 13, fontWeight: isAvail && !isPast ? 400 : 300,
                      cursor: isAvail && !isPast ? 'pointer' : 'default',
                      background: isSelected ? 'var(--slate)' : 'transparent',
                      color: isPast ? 'var(--rule)' : isSelected ? 'white' : isAvail ? 'var(--ink)' : 'var(--rule)',
                      border: isToday && !isSelected ? '1px solid var(--rule)' : isAvail && !isPast && !isSelected ? '1px solid transparent' : '1px solid transparent',
                      transition: 'all 0.12s',
                      position: 'relative',
                    }}
                    onMouseEnter={e => { if (isAvail && !isPast && !isSelected) (e.currentTarget as HTMLDivElement).style.background = 'var(--slate-pale)' }}
                    onMouseLeave={e => { if (isAvail && !isPast && !isSelected) (e.currentTarget as HTMLDivElement).style.background = 'transparent' }}
                  >
                    {d}
                    {isToday && <span style={{ position: 'absolute', bottom: 3, left: '50%', transform: 'translateX(-50%)', width: 3, height: 3, borderRadius: '50%', background: isSelected ? 'white' : 'var(--terra)' }} />}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Slots */}
        {selectedDate && (
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: 12 }}>
              {formatDateLong(selectedDate)}
            </p>
            {loadingSlots ? (
              <p style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--light)', padding: '16px 0' }}>Loading times…</p>
            ) : slots.length === 0 ? (
              <p style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 300, color: 'var(--mid)', fontStyle: 'italic' }}>No available times on this date.</p>
            ) : (
              <>
                {amSlots.length > 0 && (
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--light)', marginBottom: 8 }}>Morning</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                      {amSlots.map(s => (
                        <button key={s.start} onClick={() => selectSlot(s)}
                          style={{ padding: '8px 4px', border: `1px solid ${selectedSlot?.start === s.start ? 'var(--slate)' : 'var(--rule)'}`, background: selectedSlot?.start === s.start ? 'var(--slate)' : 'white', color: selectedSlot?.start === s.start ? 'white' : 'var(--ink)', fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 300, cursor: 'pointer', transition: 'all 0.12s' }}>
                          {formatTime(s.start)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {pmSlots.length > 0 && (
                  <div>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--light)', marginBottom: 8 }}>Afternoon</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                      {pmSlots.map(s => (
                        <button key={s.start} onClick={() => selectSlot(s)}
                          style={{ padding: '8px 4px', border: `1px solid ${selectedSlot?.start === s.start ? 'var(--slate)' : 'var(--rule)'}`, background: selectedSlot?.start === s.start ? 'var(--slate)' : 'white', color: selectedSlot?.start === s.start ? 'white' : 'var(--ink)', fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 300, cursor: 'pointer', transition: 'all 0.12s' }}>
                          {formatTime(s.start)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
