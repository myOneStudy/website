'use client'

import { useState } from 'react'

export default function Banner() {

  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-6 md:w-auto z-50">
          <div className="bg-blue-1100 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-blue font-bold inline-flex">
                Free 7-day trial
                <span className="italic px-1.5 text-white"> and </span>
                <span className="font-bold text-blue">30-day money-back guarantee</span>
              </p>
            </div>
            <button className="text-white hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}