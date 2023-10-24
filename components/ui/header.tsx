'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a href="/pricing" data-test-id="pricing_desktop_menu" className="font-medium text-gray-1000 hover:text-purple px-5 py-3 flex items-center transition duration-150 ease-in-out mr-2">Pricing</a>
              </li>
              <li>
                <a href="https://app.onestudy.io/sign-in" data-test-id="sign-in-desktop-menu" className="font-medium text-gray-1000 hover:text-purple px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</a>
              </li>
              <li>
                <a href="https://app.onestudy.io/sign-up" data-test-id="sign-up-desktop-menu" className="btn-sm text-white bg-[#6C48FF] hover:bg-[#483285] ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-white-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </a>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
