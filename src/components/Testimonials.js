'use client';

import { reviews } from '@/constants/data';
import { Carousel } from '@mantine/carousel';
import { Container, Group } from '@mantine/core';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <div className="">
      <Container size="xl" my={36}>
        <Group position="apart">
          <Image
            src="/images/home/review.svg"
            width={500}
            height={500}
            className="hidden sm:block"
          />
          <Carousel
            maw={500}
            withIndicators
            height={300}
            p={10}
            loop
            draggable
            className="bg-light_brown w-full rounded"
          >
            {reviews.map((review) => (
              <Carousel.Slide key={review.id} className="">
                <div className="flex flex-col items-center justify-center w-3/4 mx-auto space-y-4 my-4">
                  <p className="text-justify text-sm font-light text-beige">
                    {review.content}
                  </p>
                  <div className="flex font-semibold space-x-1">
                    <p className="text-center text-pink">
                      {review.name}
                      {' - '}
                    </p>
                    <p className="text-center text-pink">{review.role}</p>
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Group>
      </Container>
    </div>
  );
}
