'use client';

import ContactUs from '@/components/Contact';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Container } from '@mantine/core';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#E8E2C1] ">
      <Navbar
        links={[
          { label: 'Home', link: '/' },
          { label: 'Gallery', link: '/pages/gallery' },
          { label: 'Contact', link: '/pages/contact', active: true },
        ]}
      />
      <Container size="md" className="flex items-center h-full my-8 sm:my-28">
        <ContactUs />
      </Container>
      <Footer />
    </div>
  );
}
