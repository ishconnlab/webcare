import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { WebsiteQuoteTool } from "@/components/WebsiteQuoteTool";
import { Portfolio } from "@/components/Portfolio";
import { WhyUs } from "@/components/WhyUs";
import { Vision } from "@/components/Vision";
import { Ishconnect } from "@/components/Ishconnect";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <PortfolioShowcase />
        <WebsiteQuoteTool />
        <Portfolio />
        <WhyUs />
        <Vision />
        <Ishconnect />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
