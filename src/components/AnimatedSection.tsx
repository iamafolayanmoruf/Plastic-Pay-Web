import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  id?: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function AnimatedSection({ id, className = '', style, children }: Props) {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}
