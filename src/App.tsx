import { Navbar } from './components/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { DepositCodeSection } from './components/sections/DepositCodeSection'
import { RecyclingItemsSection } from './components/sections/RecyclingItemsSection'
import { RewardsSection } from './components/sections/RewardsSection'
import { TrustSection } from './components/sections/TrustSection'
import { ImpactSection } from './components/sections/ImpactSection'
import { FAQSection } from './components/sections/FAQSection'
import { ContactSection } from './components/sections/ContactSection'
import { DownloadSection } from './components/sections/DownloadSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DepositCodeSection />
        <RecyclingItemsSection />
        <RewardsSection />
        <TrustSection />
        <ImpactSection />
        <FAQSection />
        <ContactSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}

export default App
