import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import About from '@/components/About';
import WhyHelvar from '@/components/WhyHelvar';
import ProductExplorer from '@/components/ProductExplorer';
import ProductRange from '@/components/ProductRange';
import Partners from '@/components/Partners';
import Statistics from '@/components/Statistics';
import Industries from '@/components/Industries';
import WhyBK from '@/components/WhyBK';
import TechnicalExpertise from '@/components/TechnicalExpertise';
import HelvarTechnology from '@/components/HelvarTechnology';
import Testimonials from '@/components/Testimonials';
import CompanyCredentials from '@/components/CompanyCredentials';
import FAQ from '@/components/FAQ';
import Downloads from '@/components/Downloads';
import Newsletter from '@/components/Newsletter';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <About />
        <WhyHelvar />
        <ProductExplorer />
        <ProductRange />
        <Partners />
        <Statistics />
        <Industries />
        <WhyBK />
        <TechnicalExpertise />
        <HelvarTechnology />
        <Testimonials />
        <CompanyCredentials />
        <FAQ />
        <Downloads />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
