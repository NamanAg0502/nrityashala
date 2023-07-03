import Hero from '@/components/Hero';
import { Navbar } from '../components/Navbar';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar
        links={[
          { label: 'Home', link: '/', active: true },
          { label: 'About', link: '/about' },
          { label: 'Contact', link: '/pages/contact' },
        ]}
      />
      <Hero />
    </div>
  );
}
