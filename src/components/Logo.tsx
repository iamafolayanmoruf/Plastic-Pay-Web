import type { SVGProps } from 'react'
import { useId } from 'react'

export function LogoMark({ className, ...p }: SVGProps<SVGSVGElement>) {
  const gid = useId()
  const gradId = `pp-logo-grad-${gid.replace(/:/g, '')}`
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...p}
    >
      <rect width="40" height="40" rx="12" fill={`url(#${gradId})`} />
      <path
        d="M11 27V13h6c2.76 0 4.66 1.75 4.66 4.2 0 2.46-1.9 4.2-4.66 4.2H14.2V27H11zm3.2-7.5h2.55c1.2 0 1.95-.75 1.95-1.88 0-1.12-.75-1.87-1.95-1.87H14.2v3.75z"
        fill="#fff"
      />
      <path
        d="M22.8 27l5.33-13.4h2.92L36.4 27h-3.33l-.96-2.55H26.1L26.05 27h-3.25zm4.38-5.3h3.75l-1.83-4.88-1.92 4.88z"
        fill="#DCFCE7"
      />
      <defs>
        <linearGradient id={gradId} x1="8" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0D9488" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function LogoWordmark() {
  return (
    <span className="logo-wordmark" aria-label="PlasticPay home">
      <LogoMark width={36} height={36} />
      <span className="logo-text">
        Plastic<span className="logo-accent">Pay</span>
      </span>
    </span>
  )
}
