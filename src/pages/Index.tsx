import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bergisch Gladbach | Fade 21</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Fade 21 in Bergisch Gladbach für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bergisch Gladbach, Fade 21"
        />
        <link rel="canonical" href="https://fade21.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Fade 21 | Premium Barbershop Bergisch Gladbach" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bergisch Gladbach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fade21.de" />
        <meta property="og:image" content="https://fade21.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fade 21 | Premium Barbershop Bergisch Gladbach" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://fade21.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Fade 21",
            "image": "https://fade21.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Straße 12",
              "addressLocality": "Bergisch Gladbach",
              "postalCode": "51465",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.9918",
              "longitude": "7.1293"
            },
            "url": "https://fade21.de",
            "telephone": "+49 30 1234567",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/fade21",
              "https://www.instagram.com/fade21"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

