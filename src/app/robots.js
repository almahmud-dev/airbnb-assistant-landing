export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://airbnb-assistant-landing.vercel.app/sitemap.xml',
  };
}