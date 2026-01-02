import { motion } from 'framer-motion';
import { Leaf, Award, Heart, Users, Coffee, Globe, Star, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import aboutFarm from '@/assets/about-farm.jpg';
import aboutBarista from '@/assets/about-barista.jpg';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We partner with eco-conscious farms and use recyclable packaging to minimize our environmental footprint.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'Only the top 1% of Arabica beans make it into our roastery. We never compromise on excellence.',
  },
  {
    icon: Heart,
    title: 'Handcrafted Care',
    description: 'Every cup is prepared by skilled baristas who treat coffee-making as an art form.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We create welcoming spaces that bring people together and support local initiatives.',
  },
];

const stats = [
  { number: '50+', label: 'Partner Farms', icon: Globe },
  { number: '15M+', label: 'Cups Served', icon: Coffee },
  { number: '4.9', label: 'Customer Rating', icon: Star },
  { number: '6AM-10PM', label: 'Open Daily', icon: Clock },
];

const team = [
  {
    name: 'Marcus Chen',
    role: 'Founder & Head Roaster',
    bio: '20+ years in specialty coffee, trained in Italy and Ethiopia.',
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Coffee Sourcing',
    bio: 'Travels the world to find the most exceptional coffee beans.',
  },
  {
    name: 'James Okonkwo',
    role: 'Lead Barista',
    bio: 'National Latte Art Champion 2024, passionate about education.',
  },
];

const About = () => {
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
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mt-4 mb-6">
              About <span className="text-gradient-gold">CoffeeVerse</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From a small roastery to a beloved coffee destination, discover the passion 
              and people behind every cup we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                Est. 2020
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
                A Journey of <span className="text-gradient-gold">Passion</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                CoffeeVerse was born from a simple belief: that exceptional coffee can transform 
                ordinary moments into extraordinary experiences. Our founder, Marcus Chen, spent 
                years traveling through coffee-growing regions, learning from farmers and master 
                roasters alike.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                In 2020, he opened our first roastery in a small garage, experimenting with 
                roast profiles late into the night. Word spread quickly—neighbors, then 
                strangers, started lining up for a taste of what would become our signature 
                blends.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we serve thousands of customers daily across multiple locations, but 
                our mission remains unchanged: to craft the perfect cup, one coffee at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={aboutFarm}
                alt="Coffee farm in the mountains"
                className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-2xl blur-2xl" />
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-accent/10 rounded-2xl blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-coffee-espresso">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              What We Believe
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Our <span className="text-gradient-gold">Core Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide every decision we make, from sourcing beans to 
              serving our community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover-lift text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Craft */}
      <section className="py-24 bg-coffee-espresso">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src={aboutBarista}
                alt="Barista crafting coffee"
                className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                The Craft
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
                Perfection in <span className="text-gradient-gold">Every Pour</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our baristas undergo a rigorous 200-hour training program before they 
                craft their first customer drink. We believe that great coffee is equal 
                parts science and art.
              </p>
              <ul className="space-y-4">
                {[
                  'Precision temperature control for optimal extraction',
                  'Fresh grinding within 30 seconds of brewing',
                  'Hand-poured techniques for layered drinks',
                  'Continuous education on new methods and origins',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Meet The Team
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              The <span className="text-gradient-gold">People</span> Behind the Brew
            </h2>
            <p className="text-muted-foreground text-lg">
              Passionate individuals who bring their expertise and love for coffee 
              to every cup we serve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-card border border-border/50 text-center hover-lift"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                  <span className="text-3xl font-serif font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </main>
  );
};

export default About;
