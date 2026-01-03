import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedCoffees from '@/components/FeaturedCoffees';
import AboutSection from '@/components/AboutSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedCoffees />
      <AboutSection />
      <NewsletterSection />
      <Footer />
      <CartDrawer />
    </main>
  );
};

export default Index;
