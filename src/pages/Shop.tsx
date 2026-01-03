import { motion } from 'framer-motion';
import { Package, Truck, Gift, Star, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

import cappuccino from '@/assets/coffee-cappuccino.jpg';
import espresso from '@/assets/coffee-espresso.jpg';
import latte from '@/assets/coffee-latte.jpg';
import mocha from '@/assets/coffee-mocha.jpg';

const products = [
  {
    id: 'beans-signature',
    name: 'Signature Blend Beans',
    description: 'Our flagship blend with notes of chocolate, caramel, and subtle fruitiness. Medium roast, perfect for any brewing method.',
    price: 1999,
    image: cappuccino,
    category: 'Coffee Beans',
    weight: '340g',
    rating: 4.9,
  },
  {
    id: 'beans-dark',
    name: 'Midnight Roast',
    description: 'Bold and intense dark roast with smoky undertones. Ideal for espresso lovers who crave depth.',
    price: 2199,
    image: espresso,
    category: 'Coffee Beans',
    weight: '340g',
    rating: 4.8,
  },
  {
    id: 'beans-light',
    name: 'Morning Light Roast',
    description: 'Bright and citrusy light roast from Ethiopian highlands. A refreshing way to start your day.',
    price: 2299,
    image: latte,
    category: 'Coffee Beans',
    weight: '340g',
    rating: 4.7,
  },
  {
    id: 'beans-decaf',
    name: 'Decaf Delight',
    description: 'All the flavor, none of the caffeine. Swiss water processed for a smooth, clean taste.',
    price: 2099,
    image: mocha,
    category: 'Coffee Beans',
    weight: '340g',
    rating: 4.6,
  },
];

const giftSets = [
  {
    id: 'gift-starter',
    name: 'Coffee Starter Kit',
    description: 'Perfect for beginners. Includes 3 signature blends and a brewing guide.',
    price: 4999,
    items: ['Signature Blend', 'Morning Light', 'Brewing Guide'],
  },
  {
    id: 'gift-connoisseur',
    name: 'Connoisseur Collection',
    description: 'For the true coffee lover. 5 premium single-origin beans from around the world.',
    price: 7999,
    items: ['Ethiopian', 'Colombian', 'Sumatran', 'Guatemalan', 'Kenyan'],
  },
  {
    id: 'gift-ultimate',
    name: 'Ultimate Coffee Experience',
    description: 'The complete package. Beans, gear, and an online class with our head roaster.',
    price: 15999,
    items: ['6 Premium Beans', 'Pour-Over Kit', 'Private Class'],
  },
];

const features = [
  {
    icon: Package,
    title: 'Fresh Roasted',
    description: 'Roasted within 48 hours of shipping',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over ₹2000',
  },
  {
    icon: Gift,
    title: 'Gift Wrapping',
    description: 'Premium packaging available',
  },
];

const Shop = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to Cart! ☕",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero coffee-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Online Store
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mt-4 mb-6">
              <span className="text-gradient-gold">Shop</span> CoffeeVerse
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bring the CoffeeVerse experience home. Premium beans, curated gift sets, 
              and everything you need for the perfect brew.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-coffee-espresso border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Beans */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Premium Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Coffee <span className="text-gradient-gold">Beans</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Freshly roasted and shipped within 48 hours. Experience the difference 
              of truly fresh coffee.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl bg-gradient-card border border-border/50 overflow-hidden hover-lift"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                      {product.weight}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-primary text-xs font-medium tracking-wider uppercase">
                    {product.category}
                  </span>
                  <h3 className="font-serif font-bold text-lg mt-2 mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-gradient-gold">
                      ₹{product.price}
                    </span>
                    <Button
                      variant="hero"
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Sets */}
      <section className="py-24 bg-coffee-espresso">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Perfect Presents
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Gift <span className="text-gradient-gold">Sets</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Curated collections for coffee lovers. Beautifully packaged and ready to gift.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {giftSets.map((gift, index) => (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">{gift.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{gift.description}</p>
                <div className="mb-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Includes:
                  </span>
                  <ul className="mt-2 space-y-1">
                    {gift.items.map((item) => (
                      <li key={item} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-gradient-gold">
                    ₹{gift.price}
                  </span>
                  <Button variant="outline" size="sm">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Never Run Out of <span className="text-gradient-gold">Coffee</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Subscribe and save 15% on every order. Fresh beans delivered to your door 
                on your schedule. Cancel anytime.
              </p>
              <Button variant="hero" size="lg">
                Start Your Subscription
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </main>
  );
};

export default Shop;
