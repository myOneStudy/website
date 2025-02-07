export const metadata = {
    title: 'OneStudy.io',
    description: 'Never waste hours creating flashcards again.',
  }
  
  import Hero from '@/components/if-hero'
  import Features from '@/components/od-features'
  import Newsletter from '@/components/newsletter'
  import Zigzag from '@/components/if-zigzag'
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