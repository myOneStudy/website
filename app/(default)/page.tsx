export const metadata = {
  title: 'OneStudy.io',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Accordion from '@/components/accordion'
import Blog from '@/components/blog'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Blog/>      
      <Newsletter />
      <Accordion />
    </>
  )
}
