export const metadata = {
    title: 'Home - Open PRO',
    description: 'Page description',
  }
  
  import Hero from '@/components/af-hero'
  import Features from '@/components/af-features'
  import Newsletter from '@/components/newsletter'
  import Zigzag from '@/components/zigzag'
  import Testimonials from '@/components/af-testimonials'
  
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