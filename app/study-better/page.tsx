export const metadata = {
    title: 'OneStudy.io',
    description: 'Say goodbye to outdated flashcards for good.',
  }
  
  import Hero from '@/components/sb-hero'
  import Features from '@/components/od-features'
  import Newsletter from '@/components/newsletter'
  import Zigzag from '@/components/sb-zigzag'
  import Testimonials from '@/components/od-testimonials'
import FeaturesBlocks from '@/components/features-blocks'
  
  export default function Home() {
    return (
      <>
        <Hero />
        <Zigzag />
        <FeaturesBlocks />
        
        <Newsletter />
      </>
    )
  }