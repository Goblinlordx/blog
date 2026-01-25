'use client'

import Script from 'next/script'

export default function Busuanzi() {
    return (
        <>
            <Script
                src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
                strategy="afterInteractive"
            />
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span id="busuanzi_container_page_pv" style={{ display: 'none' }}>
                    Views: <span id="busuanzi_value_page_pv" />
                </span>
            </span>
        </>
    )
}
