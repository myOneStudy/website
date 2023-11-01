export const metadata = {
  title: 'OneStudy.io',
  description: 'A study tool you will actually love using.',
}

import Hero from '@/components/recall-hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Accordion from '@/components/accordion'
import Zigzag from '@/components/sb-zigzag'
import Recall from '@/components/recall'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag/>
      <Recall/>
      <FeaturesBlocks />      
      <Newsletter />
      <Accordion />
    </>
  )
}
