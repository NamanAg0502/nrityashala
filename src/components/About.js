'use client';

import { Container, Group } from '@mantine/core';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-pink">
      <Container size="xl" py={60}>
        <div className="flex w-full justify-center space-x-16 items-start">
          <div>
            <Image
              src="/images/home/kathak.jpg"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col w-1/2 justify-between space-y-12 text-dark_brown">
            <h1 className="text-4xl font-bold">About Me</h1>
            <div className="flex flex-col space-y-2">
              <div>
                <h2 className="text-xl font-medium">Saloni Mishra - Founder</h2>
                <h4>Kathak Dance Teacher</h4>
              </div>
              <p className="text-base font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                eveniet unde, qui excepturi tempore aliquam provident odio
                possimus quam blanditiis iste officiis molestiae? Ipsam
                consectetur quos rem quisquam vel blanditiis nobis consequatur
                suscipit sint culpa quia illo debitis, quasi cum, natus eaque
                vitae et a assumenda eum? Omnis, corporis illum.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
