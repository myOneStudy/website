export const metadata = {
    title: 'Home - Open PRO',
    description: 'Page description',
  }
  
  import Hero from '@/components/od-hero'
  import Features from '@/components/od-features'
  import Newsletter from '@/components/newsletter'
  import Zigzag from '@/components/zigzag'
  import Testimonials from '@/components/od-testimonials'
  
  export default function Home() {
    return (
      <>
        <Hero />
        <Zigzag />
        <Features />
        <Testimonials />
        <Newsletter />
      </>
    )
  }