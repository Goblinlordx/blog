'use client'

import { useEffect, useState } from 'react'

interface ViewCounterProps {
  slug: string
  className?: string
}

export default function ViewCounter({ slug, className }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    const path = `/blog/${slug}`

    fetch(`https://goblinlord.goatcounter.com/counter/${encodeURIComponent(path)}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch view count')
        }
        return res.json()
      })
      .then((data) => {
        setViews(parseInt(data.count, 10))
      })
      .catch((err) => {
        console.error('Error fetching view count:', err)
        setViews(0)
      })
  }, [slug])

  const displayViews = views !== null ? views : '-'

  return (
    <div
      className={`flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 ${className}`}
    >
      <span className="flex items-center">
        Views: <span className="ml-2">{displayViews}</span>
      </span>
    </div>
  )
}
