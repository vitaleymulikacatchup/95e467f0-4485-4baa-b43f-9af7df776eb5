"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Calendar, ChefHat, DollarSign, Heart, HelpCircle, Leaf, Mail, MessageCircle, Pizza, ScrollText, Sparkles, Star, TrendingUp, User, Users } from "lucide-react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="animatedAurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Location", id: "contact" },
            { name: "Reviews", id: "testimonials" },
            { name: "Order Online", id: "https://order.leopizzas.com" }
          ]}
          brandName="LeoPizzas"
          button={{
            text: "Order Now",
            href: "https://order.leopizzas.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Italian Pizza in Las Vegas"
          description="Experience the finest Italian cuisine at LeoPizzas. Hand-tossed dough, fresh ingredients, and traditional recipes bring you the taste of Italy right here in Vegas."
          tag="Since 2018"
          tagIcon={Pizza}
          buttons={[
            {
              text: "Order Online",
              href: "https://order.leopizzas.com"
            },
            {
              text: "View Menu",
              href: "menu"
            }
          ]}
          imageSrc="https://pixabay.com/get/g4f651d8786f8583e2879fd1aa2a3ec53eb95a6a29e4d833a7200e499e31d4437ae39717114d07107543811c217cddc13c5d27c8a7b62ee52fe70212bfcbfb61b_1280.jpg"
          imageAlt="Delicious Italian pizza at LeoPizzas Las Vegas"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Italian Heritage"
          description="LeoPizzas brings authentic Italian flavors to Las Vegas with traditional recipes passed down through generations. Every pizza is crafted with love using the finest imported ingredients."
          tag="Established 2018"
          tagIcon={Heart}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Authentic Recipes",
              description: "Traditional Italian recipes from Southern Italy, perfected over decades",
              icon: ScrollText
            },
            {
              title: "Fresh Ingredients",
              description: "Daily fresh produce and imported Italian cheeses and meats",
              icon: Leaf
            },
            {
              title: "Hand-Tossed Dough",
              description: "Made fresh daily using traditional techniques and premium flour",
              icon: ChefHat
            }
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          imageSrc="https://pixabay.com/get/g8bcaa04c25bfaf27474656e46d78526b06f62d654c17966b0c8c838dc8d74d0b243a2b2fcbd58993b6a206c98700c72cc54b4ff2d653291eabacae3826ab43ff_1280.jpg"
          imageAlt="Head chef Mario preparing authentic Italian pizza"
          imagePosition="right"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Signature Pizzas"
          description="Hand-crafted pizzas made with authentic Italian ingredients and traditional techniques"
          tag="Menu Favorites"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "margherita",
              name: "Margherita Classic",
              price: "$18.99",
              imageSrc: "https://pixabay.com/get/g6859b4183771885fb6f7f610a5280cb3a8644265d42ba8f81dbdf5b24de45c3103970de784bbcc0c72d641470863ca345cd9e9400bea73012313ace35f75df7d_1280.jpg",
              imageAlt: "Margherita pizza with fresh basil and mozzarella",
              initialQuantity: 1
            },
            {
              id: "pepperoni",
              name: "Pepperoni Supreme",
              price: "$21.99",
              imageSrc: "https://pixabay.com/get/g009fd99151dd24946574da0b765380505b650e741c8caf202a27daa4a021e2656a963ad1644c978f9e02de75ce429515261ac57016a92ab61fda02e1c8b067e4_1280.jpg",
              imageAlt: "Pepperoni pizza with melted cheese",
              initialQuantity: 1
            },
            {
              id: "veggie",
              name: "Garden Veggie",
              price: "$19.99",
              imageSrc: "https://pixabay.com/get/g6aeb6fa38298d5a26921de6af2303cfe919d9e477845b60b188da945a60aaad0a6bc1f389e1171b794ebf804be92ad242ba858dc87b64066c53e7ad1e96aec20_1280.jpg",
              imageAlt: "Vegetable pizza with bell peppers and mushrooms",
              initialQuantity: 1
            },
            {
              id: "meatlovers",
              name: "Meat Lovers",
              price: "$24.99",
              imageSrc: "https://pixabay.com/get/g9a78a053f4c1ee5e46a08866b27ed591d235a34a0caeb9615350ff5baa592ae5e9db5ae17c8cd92987563ad440b6904fbb42c2fdbb20a06c9e6717e390934b48_1280.jpg",
              imageAlt: "Meat lovers pizza with sausage and pepperoni",
              initialQuantity: 1
            },
            {
              id: "hawaiian",
              name: "Hawaiian Paradise",
              price: "$22.99",
              imageSrc: "https://pixabay.com/get/g30720809e25a417cbaa2685e5777dd34a2a9a26a656df915ed7cfdbd674f43ffc54f713d1fab70532f0983df2417701e9177f8998c1de436fd506f1cc721c206_1280.jpg",
              imageAlt: "Hawaiian pizza with ham and pineapple",
              initialQuantity: 1
            }
          ]}
          buttons={[
            {
              text: "Full Menu",
              href: "https://menu.leopizzas.com"
            },
            {
              text: "Order Now",
              href: "https://order.leopizzas.com"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Pizza Sizes & Pricing"
          description="Choose from our variety of sizes to satisfy any appetite"
          tag="Great Value"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "personal",
              badge: "Perfect for 1",
              badgeIcon: User,
              price: "$12.99",
              subtitle: "10-inch personal pizza",
              features: [
                "Serves 1 person",
                "All toppings available",
                "Fresh made to order",
                "Ready in 15 minutes"
              ]
            },
            {
              id: "large",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$21.99",
              subtitle: "14-inch large pizza",
              features: [
                "Serves 3-4 people",
                "Premium toppings included",
                "Hand-tossed dough",
                "Perfect for sharing"
              ]
            },
            {
              id: "family",
              badge: "Best Value",
              badgeIcon: Users,
              price: "$28.99",
              subtitle: "18-inch family size",
              features: [
                "Serves 5-6 people",
                "Extra cheese included",
                "Thick crust option",
                "Great for parties"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Why Las Vegas Loves LeoPizzas"
          description="Numbers that speak for our commitment to quality and customer satisfaction"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Happy Customers",
              description: "Satisfied pizza lovers since 2018",
              icon: Users
            },
            {
              id: "2",
              value: "100K+",
              title: "Pizzas Served",
              description: "Authentic Italian pizzas delivered",
              icon: Pizza
            },
            {
              id: "3",
              value: "4.9",
              title: "Star Rating",
              description: "Average customer rating across platforms",
              icon: Star
            },
            {
              id: "4",
              value: "6",
              title: "Years Strong",
              description: "Proudly serving Las Vegas since 2018",
              icon: Calendar
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Pizza Family"
          description="The passionate team behind every delicious pizza at LeoPizzas"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Mario Rossi",
              role: "Head Chef",
              description: "Master pizza chef from Naples with 20+ years experience. Brings authentic Italian flavors to every pizza.",
              imageSrc: "https://pixabay.com/get/g8bcaa04c25bfaf27474656e46d78526b06f62d654c17966b0c8c838dc8d74d0b243a2b2fcbd58993b6a206c98700c72cc54b4ff2d653291eabacae3826ab43ff_1280.jpg",
              imageAlt: "Mario Rossi, Head Chef at LeoPizzas",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com/chefmario"
                },
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/mariorossi"
                }
              ]
            },
            {
              id: "2",
              name: "Sophia Martinez",
              role: "Restaurant Manager",
              description: "Ensures every guest has an exceptional dining experience. Passionate about hospitality and Italian cuisine.",
              imageSrc: "https://pixabay.com/get/g726dc5f4dc5d2284c504bdac384241757f174cfffbaff6fac204bbdd71c69cf474bdeb66395b5e6dd918930f1091bb9ade740aa6cec2a28c490bbcc8812541bf_1280.jpg",
              imageAlt: "Sophia Martinez, Restaurant Manager",
              socialLinks: [
                {
                  icon: "Twitter",
                  url: "https://twitter.com/sophiaM"
                },
                {
                  icon: "Instagram",
                  url: "https://instagram.com/sophia.martinez"
                }
              ]
            },
            {
              id: "3",
              name: "Carlos Rodriguez",
              role: "Operations Director",
              description: "Oversees daily operations and maintains our high standards of quality and service across all locations.",
              imageSrc: "https://pixabay.com/get/g4f941dc93571a41af623b581ae05889ca1713c63c161c565754cb83b5708fa7bae78d8cefde1467dd5f64b730cbaaaeaa0e24aa780af9adef499a3147b2d10db_1280.jpg",
              imageAlt: "Carlos Rodriguez, Operations Director",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/carlosrodriguez"
                },
                {
                  icon: "Mail",
                  url: "mailto:carlos@leopizzas.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real reviews from pizza lovers who keep coming back for more"
          tag="5-Star Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "Food Blogger",
              testimonial: "The best authentic Italian pizza in Las Vegas! The Margherita is absolutely perfect - fresh basil, quality mozzarella, and that wood-fired taste. LeoPizzas has become my go-to spot.",
              imageSrc: "https://pixabay.com/get/g54f3cdeaccdd5142d142b7191fd4b7690e51e48007fcfcbc9ec2b3c8adf574d5e7984dcdf3db8221c374efc3bbc6776f914ebc9dd68e96ae90a8a2b3c63129cf_1280.jpg",
              imageAlt: "Jennifer Walsh enjoying pizza"
            },
            {
              id: "2",
              name: "Mike Thompson",
              role: "Local Business Owner",
              testimonial: "Been ordering from LeoPizzas for our office meetings for over 2 years. Consistently amazing quality, always on time, and the staff is incredibly friendly. Highly recommend!",
              imageSrc: "https://pixabay.com/get/gc53c4fe811e61c005764b2e1ce29fe1d5820cdffcb32f5d172c24fcf7be740610571d3ecc973c692f451a7deb9f676206bf35823efe81e93237e396e2b34dc91_1280.jpg",
              imageAlt: "Mike Thompson with family at restaurant"
            },
            {
              id: "3",
              name: "Sarah & David Chen",
              role: "Regular Customers",
              testimonial: "Our weekly date night always includes LeoPizzas! The atmosphere is cozy, the service is excellent, and every pizza tastes like it came straight from Italy. Love this place!",
              imageSrc: "https://pixabay.com/get/gddca78a74d086a00b858ce2dfc17a99c443841591faa5c259a3a1eaa26c272ec92c992f32d356843bb4d2d7bd27a66fe91e05d29f2e71c5a2b844d78c71f8069_1280.jpg",
              imageAlt: "Sarah and David Chen on date night"
            },
            {
              id: "4",
              name: "Robert Kim",
              role: "Las Vegas Resident",
              testimonial: "I've tried every pizza place in Vegas, and LeoPizzas stands out for their authentic flavors and generous portions. The Meat Lovers is incredible - worth every penny!",
              imageSrc: "https://pixabay.com/get/g792d4e2792c811198133c69e210930e6718992923cbbc4b9bbc76216d17ed52c73d34d63ad59e54febfc27750ee98348cb635653e1596ca92b2bf8ce62f4568f_1280.jpg",
              imageAlt: "Robert Kim at business lunch"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Featured On"
          description="Recognized by Las Vegas food critics and local media"
          tag="Press"
          tagIcon={"Award"}
          textboxLayout="default"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about ordering from LeoPizzas"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your delivery hours?",
              content: "We deliver Monday through Sunday from 11 AM to 11 PM. Kitchen closes at 10:30 PM for delivery orders."
            },
            {
              id: "2",
              title: "Do you offer gluten-free options?",
              content: "Yes! We offer gluten-free crust for all our pizzas. Please inform us of any dietary restrictions when ordering."
            },
            {
              id: "3",
              title: "How long does delivery take?",
              content: "Average delivery time is 25-35 minutes depending on location and order volume. We'll provide an estimated time when you order."
            },
            {
              id: "4",
              title: "Do you cater events?",
              content: "Absolutely! We offer catering packages for parties, corporate events, and special occasions. Contact us for custom quotes and menu options."
            },
            {
              id: "5",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, debit cards, cash, and digital payments including Apple Pay and Google Pay."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Get the Latest from LeoPizzas"
          description="Subscribe to our newsletter for exclusive deals, new menu items, and special events. Join the LeoPizzas family!"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails from LeoPizzas. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="LeoPizzas"
          columns={[
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "Order Online", href: "https://order.leopizzas.com" },
                { label: "Catering", href: "catering" },
                { label: "Gift Cards", href: "giftcards" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "story" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Locations", href: "locations" },
                { label: "Hours", href: "hours" },
                { label: "Reservations", href: "reservations" }
              ]
            },
            {
              items: [
                { label: "Facebook", href: "https://facebook.com/leopizzas" },
                { label: "Instagram", href: "https://instagram.com/leopizzas" },
                { label: "Yelp", href: "https://yelp.com/leopizzas" },
                { label: "Google Reviews", href: "https://google.com/leopizzas" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}