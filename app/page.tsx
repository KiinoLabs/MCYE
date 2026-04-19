import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { WhatWeDo } from '@/components/what-we-do'
import { Impact } from '@/components/impact'
import { LatestUpdates } from '@/components/latest-updates'
import { Partners } from '@/components/partners'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <WhatWeDo />
      <Impact />
      <LatestUpdates />
      <Partners />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
