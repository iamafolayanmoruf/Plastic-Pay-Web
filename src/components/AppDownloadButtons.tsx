import type { CSSProperties } from 'react'
import { Apple } from 'lucide-react'

function GooglePlayGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" aria-hidden>
      <path
        fill="currentColor"
        d="M3.6 1.3c-.4.2-.6.6-.6 1.1v19.2c0 .5.2.9.6 1.1l11-10.7-11-10.7zm13.4 6.2L7.2 1.6 17 11.9l-.1-.3-8.9 8.9 11.9-7.9c1.9-1 .8-5.9-4-4.9z"
      />
      <path
        fill="currentColor"
        d="m15.9 13.9 2.9-2.9c2.9-3.2 2.2-10.9-11.9-14.9l-.1-.1 10.9 17.9h-1.8z"
        opacity=".9"
      />
    </svg>
  )
}

const storeBtnStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  padding: '10px 16px',
  borderRadius: 12,
  background: '#0f172a',
  color: '#fff',
  fontWeight: 700,
  fontSize: 13,
  lineHeight: 1.2,
  border: 'none',
  textDecoration: 'none',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  boxShadow: '0 4px 14px rgba(15,23,42,0.35)',
}

type Props = {
  dense?: boolean
  className?: string
}

export function AppDownloadButtons({ dense, className = '' }: Props) {
  const pad = dense ? '8px 14px' : storeBtnStyle.padding
  return (
    <div className={`app-dl-row ${className}`} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        style={{ ...storeBtnStyle, padding: pad }}
        aria-label="Download on the App Store (link coming soon)"
      >
        <Apple size={22} strokeWidth={2} />
        <span style={{ textAlign: 'left' }}>
          <span style={{ display: 'block', fontSize: 10, fontWeight: 600, opacity: 0.85 }}>
            Download on the
          </span>
          App Store
        </span>
      </a>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        style={{ ...storeBtnStyle, padding: pad }}
        aria-label="Get it on Google Play (link coming soon)"
      >
        <GooglePlayGlyph />
        <span style={{ textAlign: 'left' }}>
          <span style={{ display: 'block', fontSize: 10, fontWeight: 600, opacity: 0.85 }}>
            Get it on
          </span>
          Google Play
        </span>
      </a>
    </div>
  )
}
