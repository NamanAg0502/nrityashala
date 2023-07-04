import Hero from '@/components/Hero';
import { Navbar } from '../components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar
        links={[
          { label: 'Home', link: '/', active: true },
          { label: 'Gallery', link: '/pages/gallery' },
          { label: 'Contact', link: '/pages/contact' },
        ]}
      />
      <Hero />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}
