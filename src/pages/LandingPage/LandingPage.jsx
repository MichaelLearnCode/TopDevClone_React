import { HotJobSection, TabSection, BlogSection, AboutSection,
  HeaderSection, HeroSection, ProposeSection, AdvertisingSection} from "@/containers/LandingPage"

export default function LandingPage() {
  return (
    <div>
      <img src="assets/image/hero-section/img_background.png" className ="absolute full-100 mt-[80px] blur-[100px] z-[-1]"/>
      <HeaderSection />
      <HeroSection />
      <ProposeSection/>
      <AdvertisingSection/>
      <HotJobSection/>
      <TabSection/>
      <BlogSection/>
      <AboutSection/>
    </div>
  )
}
