'use client';

import ContactUs from '@/components/Contact';
import { Navbar } from '@/components/Navbar';
import { Container } from '@mantine/core';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#E8E2C1] ">
      <Navbar
        links={[
          { label: 'Home', link: '/' },
          { label: 'About', link: '/about' },
          { label: 'Contact', link: '/pages/contact', active: true },
        ]}
      />
      <Container size="md" className="flex items-center h-full mt-28">
        <ContactUs />
      </Container>
    </div>
  );
}
