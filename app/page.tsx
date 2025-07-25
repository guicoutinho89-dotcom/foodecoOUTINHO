import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import BenefitsSection from "@/components/benefits-section"
import SocialProofSection from "@/components/social-proof-section"
import OfferSection from "@/components/offer-section"
import GuaranteesSection from "@/components/guarantees-section"
import FinalCtaSection from "@/components/final-cta-section" // Import the new component

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <SocialProofSection />
      <OfferSection />
      <GuaranteesSection />
      <FinalCtaSection /> {/* Add the new section here */}
    </main>
  )
}
