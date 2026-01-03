import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import CoffeeCard from '@/components/CoffeeCard';

import cappuccino from '@/assets/coffee-cappuccino.jpg';
import espresso from '@/assets/coffee-espresso.jpg';
import latte from '@/assets/coffee-latte.jpg';
import mocha from '@/assets/coffee-mocha.jpg';
import americano from '@/assets/coffee-americano.jpg';
import coldbrew from '@/assets/coffee-coldbrew.jpg';

const coffeeMenu = [
  {
    id: 'cappuccino',
    name: 'Classic Cappuccino',
    description: 'Rich espresso topped with velvety steamed milk foam, creating the perfect balance of bold and creamy. A timeless Italian classic.',
    price: 299,
    image: cappuccino,
    rating: 4.9,
  },
  {
    id: 'espresso',
    name: 'Double Espresso',
    description: 'Intense and aromatic, our signature double shot delivers a pure coffee experience with a golden crema that speaks to quality.',
    price: 199,
    image: espresso,
    rating: 4.8,
  },
  {
    id: 'latte',
    name: 'Caramel Latte',
    description: 'Smooth espresso blended with steamed milk and rich caramel, topped with silky microfoam. Sweet indulgence in every sip.',
    price: 349,
    image: latte,
    rating: 4.9,
  },
  {
    id: 'mocha',
    name: 'Belgian Mocha',
    description: 'Premium Belgian chocolate meets robust espresso, crowned with fresh whipped cream and chocolate shavings. Pure decadence.',
    price: 399,
    image: mocha,
    rating: 4.9,
  },
  {
    id: 'americano',
    name: 'Bold Americano',
    description: 'Espresso diluted with hot water, delivering a clean and bold flavor. Simple, elegant, and always satisfying.',
    price: 249,
    image: americano,
    rating: 4.7,
  },
  {
    id: 'coldbrew',
    name: 'Signature Cold Brew',
    description: 'Steeped for 20 hours, our cold brew is smooth, naturally sweet, and refreshingly bold. The perfect pick-me-up.',
    price: 279,
    image: coldbrew,
    rating: 4.8,
  },
];

const Menu = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero coffee-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Our Collection
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mt-4 mb-6">
              The <span className="text-gradient-gold">Coffee Menu</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each cup is handcrafted with precision using the finest beans sourced from around the world. 
              Discover your perfect brew from our carefully curated selection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeMenu.map((coffee, index) => (
              <CoffeeCard key={coffee.id} {...coffee} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-coffee-espresso">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Customize Your <span className="text-gradient-gold">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our beverages can be customized with your choice of milk alternatives, 
              extra shots, or sweetness levels. Just ask our baristas!
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </main>
  );
};

export default Menu;
