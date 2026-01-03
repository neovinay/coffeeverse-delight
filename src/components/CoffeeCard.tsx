import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface CoffeeCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  index?: number;
}

const CoffeeCard = ({
  id,
  name,
  description,
  price,
  image,
  rating = 4.8,
  index = 0,
}: CoffeeCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    toast.success(`${name} added to cart!`, {
      description: 'Open your cart to checkout',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-card rounded-2xl overflow-hidden border border-border/50 hover-lift"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-2xl font-bold text-gradient-gold">
              ₹{price.toFixed(2)}
            </span>
          </div>
          <Button
            variant="hero"
            size="sm"
            className="group/btn"
            onClick={handleAddToCart}
          >
            <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform duration-300" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      </div>
    </motion.div>
  );
};

export default CoffeeCard;
