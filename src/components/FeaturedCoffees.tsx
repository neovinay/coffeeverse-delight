import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import CoffeeCard from './CoffeeCard';

import cappuccino from '@/assets/coffee-cappuccino.jpg';
import espresso from '@/assets/coffee-espresso.jpg';
import latte from '@/assets/coffee-latte.jpg';

const featuredCoffees = [
  {
    id: 'cappuccino',
    name: 'Classic Cappuccino',
    description: 'Rich espresso topped with velvety steamed milk foam, creating the perfect balance of bold and creamy.',
    price: 5.50,
    image: cappuccino,
    rating: 4.9,
  },
  {
    id: 'espresso',
    name: 'Double Espresso',
    description: 'Intense and aromatic, our signature double shot delivers a pure coffee experience with a golden crema.',
    price: 4.00,
    image: espresso,
    rating: 4.8,
  },
  {
    id: 'latte',
    name: 'Caramel Latte',
    description: 'Smooth espresso blended with steamed milk and rich caramel, topped with silky microfoam.',
    price: 6.00,
    image: latte,
    rating: 4.9,
  },
];

const FeaturedCoffees = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 coffee-pattern opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Our Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Featured <span className="text-gradient-gold">Coffees</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Handpicked favorites from our master baristas. Each cup is crafted with premium beans and expert technique.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCoffees.map((coffee, index) => (
            <CoffeeCard key={coffee.id} {...coffee} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/menu">
            <Button variant="heroOutline" size="lg" className="group">
              View Full Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCoffees;
