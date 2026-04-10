// NavBar --------->
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Resources", href: "#resources" },
];
// Hero Section
export const HERO_DESIGN_WIDTH = 1440;
export const HERO_DESIGN_HEIGHT = 584;

export const HERO_FLOATING_IMAGES = [
  {
    src: "/images/Herro/image1.png",
    alt: "Airbnb",
    width: "7%",
    left: "18%",
    top: "32%",
    rotate: "-4.84deg",
    animationClass: "animate-hero-float-1",
  },
  {
    src: "/images/Herro/image3.png",
    alt: "Booking",
    width: "4.5%",
    left: "74.5%",
    top: "35%",
    rotate: "27.61deg",
    animationClass: "animate-hero-float-2",
  },
  {
    src: "/images/Herro/image2.png",
    alt: "App 2",
    width: "5.2%",
    left: "21%",
    top: "75%",
    rotate: "0deg",
    animationClass: "animate-hero-float-3",
  },
  {
    src: "/images/Herro/image4.png",
    alt: "App 4",
    width: "6.2%",
    left: "70%",
    top: "75%",
    rotate: "-7.38deg",
    animationClass: "animate-hero-float-4",
  },
];
// ServicesSection -------->
const DESC =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const SERVICES = [
  {
    icon: "/images/Service/service1.png",
    title: "Manage Property Listings",
    iconWidth: 84,
    iconHeight: 84,
  },
  {
    icon: "/images/Service/service2.png",
    title: "Manage Customer Bookings",
    iconWidth: 98,
    iconHeight: 97,
  },
  {
    icon: "/images/Service/service3.png",
    title: "Schedule House Cleaning",
    iconWidth: 78,
    iconHeight: 78,
  },
  {
    icon: "/images/Service/service4.png",
    title: "Monitor Guest Reviews",
    iconWidth: 91,
    iconHeight: 88,
  },
  {
    icon: "/images/Service/service5.png",
    title: "Track & Report Expenses",
    iconWidth: 75,
    iconHeight: 89,
  },
  {
    icon: "/images/Service/service6.png",
    title: "Guest Inquiry & Support",
    iconWidth: 74,
    iconHeight: 100,
  },
].map((s) => ({ ...s, description: DESC }));
// PricingSection --------->
export const PRICING_PLANS = [
  {
    name: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    featured: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: false },
      { text: "Unlimited Sharing", included: false },
      { text: "Upload graphics & video in up to 4k", included: false },
      { text: "Unlimited Projects", included: false },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Professional",
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
    monthlyPrice: 25,
    yearlyPrice: 19,
    featured: true,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    monthlyPrice: 100,
    yearlyPrice: 75,
    featured: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics", included: true },
      { text: "Access to 100 million stock images", included: true },
      { text: "Upload custom icons and fonts", included: true },
      { text: "Unlimited Sharing", included: true },
      { text: "Upload graphics & video in up to 4k", included: true },
      { text: "Unlimited Projects", included: true },
      { text: "Instant Access to our design system", included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
  },
];
// ToolsSection --------->
export const TOOLS = [
  {
    name: "PriceLabs",
    src: "/images/Tools/tool1.png",
    iconWidth: 174,
    iconHeight: 46,
  },
  {
    name: "Wheelhouse",
    src: "/images/Tools/tool2.png",
    iconWidth: 210,
    iconHeight: 27,
  },
  {
    name: "Beyond Pricing",
    src: "/images/Tools/tool3.png",
    iconWidth: 193,
    iconHeight: 31,
  },
  {
    name: "Hostfully",
    src: "/images/Tools/tool4.png",
    iconWidth: 151,
    iconHeight: 56,
  },
  {
    name: "Guesty",
    src: "/images/Tools/tool5.png",
    iconWidth: 135,
    iconHeight: 55,
  },
  {
    name: "Lodgify",
    src: "/images/Tools/tool6.png",
    iconWidth: 193,
    iconHeight: 31,
  },
  {
    name: "Tool 7",
    src: "/images/Tools/tool4.png",
    iconWidth: 151,
    iconHeight: 56,
  },
  {
    name: "Tool 8",
    src: "/images/Tools/tool5.png",
    iconWidth: 135,
    iconHeight: 55,
  },
  {
    name: "Tool 9",
    src: "/images/Tools/tool6.png",
    iconWidth: 193,
    iconHeight: 31,
  },
];
// HowItWorksSection --------->
export const STEPS = [
  {
    num: "01",
    label: "Add requirements\n& sign up today",
    topIcon: "/images/Work/work_top1.png",
    icon: "/images/Work/work1.png",
    iconWidth: 76,
    iconHeight: 76,
    mainIconWidth: 72,
    mainIconHeight: 58,
    plusIcon: false,
  },
  {
    num: "02",
    label: "Connect with your CSM &\nonboarding team",
    topIcon: "/images/Work/work_top2.png",
    icon: "/images/Work/work2.png",
    iconWidth: 76,
    iconHeight: 76,
    mainIconWidth: 108,
    mainIconHeight: 123,
    plusIcon: false,
  },
  {
    num: "03",
    label: "Meet your STR\nAssistant next week",
    topIcon: "/images/Work/work_top3.png",
    icon: "/images/Work/work3.png",
    iconWidth: 76,
    iconHeight: 76,
    mainIconWidth: 70,
    mainIconHeight: 58,
    plusIcon: true,
  },
];

// WhyChooseUsSection --------->
export const WHY_CHOOSE_US = {
  heading: "Few Reasons Why you\nChoose us?",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  features: [
    "Brilliant Client Service",
    "Flexibility & Adaptibility",
    "We make it Personal",
    "We have expart in our team",
  ],
};

// TestimonialsSection --------->
export const REVIEWS = {
  heading: "Check Our Clients",
  highlight: "Review",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  reviews: [
    { id: 1, name: "Jenny Wilson",   image: "/images/Review/review1.png", rating: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, name: "Esther Howard",  image: "/images/Review/review2.png", rating: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, name: "Robert Fox",     image: "/images/Review/review3.png", rating: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 4, name: "Sarah Johnson",  image: "/images/Review/review1.png", rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 5, name: "Mark Davis",    image: "/images/Review/review2.png", rating: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ],
};

// FAQSection --------->
export const FAQS = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings page.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. You will continue to have access until the end of your current billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add your company details, VAT number, and other billing information to your invoices.",
  },
  {
    question: "How does billing work?",
    answer:
      "We bill on a monthly or yearly basis depending on your selected plan. Payments are processed securely.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your account email from your profile settings page. A verification email will be sent to confirm.",
  },
];

export const FOOTER_LINKS = {
  Company: ["About", "Features", "Works", "Career"],
  Help: [
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ],
  Resources: [
    "Free eBooks",
    "Development Tutorial",
    "How to – Blog",
    "Youtube Playlist",
  ],
};
