import { motion } from 'framer-motion';
import { Leaf, Award, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Ethically Sourced',
    description: 'Direct partnerships with farmers ensure fair wages and sustainable practices.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized globally for our exceptional roasting and brewing techniques.',
  },
  {
    icon: Heart,
    title: 'Handcrafted',
    description: 'Every cup is made with care by our skilled baristas using traditional methods.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We believe in creating spaces that bring people together over great coffee.',
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-coffee-espresso relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Passion in Every <span className="text-gradient-gold">Cup</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded in 2020, CoffeeVerse began with a simple mission: to bring the world's finest coffee experiences to every cup. We travel the globe to source exceptional beans, working directly with farmers who share our commitment to quality and sustainability.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our master roasters bring decades of expertise to every batch, ensuring each roast profile unlocks the unique character of its origin. From seed to cup, we obsess over every detail.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
