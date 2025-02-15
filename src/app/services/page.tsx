"use client";
import ContactForm from "@/app/components/ContactForm";
import { Tabs } from "@/app/components/ui/Tabs";
import tabsData from "@/data/services.json";
import { HeroSection } from "./HeroSection"

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <section>
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
          <Tabs tabs={tabsData} />
        </div>
      </section>
      <section className="bg-secondary text-secondary-content">
        <div className="container block">
          <h2>Get Started</h2>
          <p>Ready to take your business to the next level? Contact us to discuss your needs and learn how we can support your growth. As a nonprofit organization, we're committed to making professional marketing services accessible to every small business.</p>
          <p>Contact us today to schedule a consultation and learn more about our services and sliding scale fees based on your business size and needs.</p>
          <p>Bridger Labs is a nonprofit marketing agency dedicated to empowering small businesses with the tools and support they need to succeed in today's digital marketplace.*</p>
        </div>
      </section>
      <ContactForm />
    </>
  );
}