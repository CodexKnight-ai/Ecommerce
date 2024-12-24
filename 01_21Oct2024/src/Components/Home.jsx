import React from 'react'
import Hero from './Hero'
import Shop from './Shop'
import SEO from './SEO/SEO'

function Home() {
  return (
    <main>
      <SEO 
        title="Prithvi Steel Art - Premium Architectural Metal & Glass Solutions"
        description="Transform your space with custom metal works, glass railings, and innovative architectural solutions. 10+ years of expertise in crafting premium steel art and designs."
        keywords="metal works, steel art, glass railings, architectural solutions, custom designs"
      />
      <Hero/>
      <Shop/>      
    </main>
  )
}

export default Home