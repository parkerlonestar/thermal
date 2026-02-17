import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { ServiceAreas } from "@/components/service-areas"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Page() {
  return (
    <main className="relative">
      {/* Full-page logo watermark background */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center" aria-hidden="true">
        <div className="relative h-[90vh] w-[90vw] opacity-[0.06]">
          <Image
            src="/images/thermo-tex-logo.jpg"
            alt=""
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <Benefits />
        <ServiceAreas />
        <ContactCTA />
        <Footer />
      </div>
    </main>
  )
}
