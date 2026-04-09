export const NAV_LINKS = [
  { label: "Home",      href: "#home" },
  { label: "About",     href: "#about" },
  { label: "Services",  href: "#services" },
  { label: "Pricing",   href: "#pricing" },
  { label: "Blog",      href: "#blog" },
  { label: "Resources", href: "#resources" },
];

export const SERVICES = [
  {
    icon: "/images/Service/service1.png",
    title: "Manage Property Listings",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/Service/service2.png",
    title: "Manage Customer Bookings",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/Service/service3.png",
    title: "Schedule House Cleaning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/Service/service4.png",
    title: "Monitor Guest Reviews",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/Service/service5.png",
    title: "Track & Report Expenses",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/Service/service6.png",
    title: "Guest Inquiry & Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const PRICING_PLANS = [
  {
    name: "Freebie",
    description: "Ideal for individuals who need quick access to basic features.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    featured: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics",         included: true  },
      { text: "Access to 100 million stock images",     included: true  },
      { text: "Upload custom icons and fonts",          included: false },
      { text: "Unlimited Sharing",                      included: false },
      { text: "Upload graphics & video in up to 4k",   included: false },
      { text: "Unlimited Projects",                     included: false },
      { text: "Instant Access to our design system",   included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Professional",
    description: "Ideal for individuals who need advanced features and tools for client work.",
    monthlyPrice: 25,
    yearlyPrice: 19,
    featured: true,
    features: [
      { text: "20,000+ of PNG & SVG graphics",         included: true },
      { text: "Access to 100 million stock images",     included: true },
      { text: "Upload custom icons and fonts",          included: true },
      { text: "Unlimited Sharing",                      included: true },
      { text: "Upload graphics & video in up to 4k",   included: true },
      { text: "Unlimited Projects",                     included: true },
      { text: "Instant Access to our design system",   included: false },
      { text: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "Ideal for businesses who need personalized services and security for large teams.",
    monthlyPrice: 100,
    yearlyPrice: 75,
    featured: false,
    features: [
      { text: "20,000+ of PNG & SVG graphics",         included: true },
      { text: "Access to 100 million stock images",     included: true },
      { text: "Upload custom icons and fonts",          included: true },
      { text: "Unlimited Sharing",                      included: true },
      { text: "Upload graphics & video in up to 4k",   included: true },
      { text: "Unlimited Projects",                     included: true },
      { text: "Instant Access to our design system",   included: true },
      { text: "Create teams to collaborate on designs", included: true },
    ],
  },
];

export const FAQS = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings page.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time. You will continue to have access until the end of your current billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add your company details, VAT number, and other billing information to your invoices.",
  },
  {
    question: "How does billing work?",
    answer: "We bill on a monthly or yearly basis depending on your selected plan. Payments are processed securely.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email from your profile settings page. A verification email will be sent to confirm.",
  },
];

export const FOOTER_LINKS = {
  Company:   ["About", "Features", "Works", "Career"],
  Help:      ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  Resources: ["Free eBooks", "Development Tutorial", "How to – Blog", "Youtube Playlist"],
};