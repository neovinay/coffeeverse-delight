import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, User, Loader2, CheckCircle, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

const addressSchema = z.object({
  fullName: z.string().trim().min(2, 'Name is required').max(100),
  phone: z.string().trim().min(10, 'Valid phone number required').max(15),
  address: z.string().trim().min(10, 'Complete address required').max(500),
  city: z.string().trim().min(2, 'City is required').max(100),
  pincode: z.string().trim().min(6, 'Valid pincode required').max(10),
});

const Checkout = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!user) {
      toast({
        title: 'Please sign in',
        description: 'You need to be signed in to place an order.',
        variant: 'destructive',
      });
      navigate('/auth');
      return;
    }

    const validation = addressSchema.safeParse({ fullName, phone, address, city, pincode });
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      const orderItems = items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      const { error } = await supabase.from('orders').insert({
        user_id: user.id,
        items: orderItems,
        total: totalPrice,
        shipping_address: {
          fullName,
          phone,
          address,
          city,
          pincode,
        },
        status: 'pending',
      });

      if (error) throw error;

      setOrderPlaced(true);
      clearCart();
      toast({
        title: 'Order placed! 🎉',
        description: 'Your order has been successfully placed.',
      });
    } catch (err) {
      toast({
        title: 'Order failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-3xl font-serif font-bold mb-4">Order Confirmed!</h1>
              <p className="text-muted-foreground mb-8">
                Thank you for your order. We'll start preparing your coffee right away.
              </p>
              <Button variant="hero" onClick={() => navigate('/')}>
                Continue Shopping
              </Button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-md mx-auto text-center">
              <h1 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">
                Add some delicious coffee to your cart first.
              </p>
              <Button variant="hero" onClick={() => navigate('/menu')}>
                Browse Menu
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <h1 className="text-4xl font-serif font-bold mb-8">
              <span className="text-gradient-gold">Checkout</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Order Summary */}
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-2xl border border-border/50 p-6">
                  <h2 className="text-xl font-serif font-bold mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-muted-foreground text-sm">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="font-semibold">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border mt-6 pt-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-gradient-gold">₹{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Form */}
              <div className="order-1 lg:order-2">
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  <h2 className="text-xl font-serif font-bold mb-6">Shipping Details</h2>

                  <div className="space-y-2">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="pl-10 h-12 bg-secondary/50"
                      />
                    </div>
                    {errors.fullName && <p className="text-destructive text-xs">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10 h-12 bg-secondary/50"
                      />
                    </div>
                    {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      placeholder="Complete Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="bg-secondary/50 min-h-[100px]"
                    />
                    {errors.address && <p className="text-destructive text-xs">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          placeholder="City"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="pl-10 h-12 bg-secondary/50"
                        />
                      </div>
                      {errors.city && <p className="text-destructive text-xs">{errors.city}</p>}
                    </div>

                    <div className="space-y-2">
                      <Input
                        placeholder="Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="h-12 bg-secondary/50"
                      />
                      {errors.pincode && <p className="text-destructive text-xs">{errors.pincode}</p>}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full mt-6"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Placing Order...
                      </>
                    ) : (
                      `Place Order - ₹${totalPrice.toFixed(2)}`
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Checkout;
