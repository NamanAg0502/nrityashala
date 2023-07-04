'use client';

import {
  ActionIcon,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Text,
} from '@mantine/core';
import {
  IconBrandYoutube,
  IconClockHour9,
  IconMail,
  IconMapPin,
  IconPhone,
  IconTimeDuration45,
} from '@tabler/icons-react';
import { IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#9F2F26',
        color: '#E8E2C1',
        padding: '1rem',
      }}
    >
      <Container size="xl">
        <Group position="apart" my={36}>
          <Group
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              size="sm"
              style={{
                fontFamily: 'Hindi',
                fontWeight: 'bold',
                fontSize: '2rem',
              }}
            >
              Nrityashala
            </Text>
            <Group
              spacing={0}
              //     className={classes.social}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                color: '#E8E2C1',
              }}
              noWrap
            >
              <ActionIcon size="lg">
                <IconBrandTwitter size="1.1rem" stroke={1.5} color="#E8E2C1" />
              </ActionIcon>
              <ActionIcon size="lg">
                <IconBrandYoutube size="1.1rem" stroke={1.5} color="#E8E2C1" />
              </ActionIcon>
              <ActionIcon size="lg">
                <IconBrandInstagram
                  size="1.1rem"
                  stroke={1.5}
                  color="#E8E2C1"
                />
              </ActionIcon>
            </Group>
          </Group>
          <SimpleGrid cols={2} spacing="xl">
            <div className="bg-pink text-dark_brown px-4 py-2 rounded flex flex-col justify-start space-y-2 items-start">
              <span className="text-light_brown flex items-center space-x-2">
                <span>
                  <IconMapPin />
                </span>
                <span>Address</span>
              </span>
              <h4 className="">
                1st Floor, 1/2, 1st Main Rd, 1st Block
                <br /> Koramangala, Bengaluru
              </h4>
            </div>
            <div className="bg-pink text-dark_brown px-4 py-2 rounded flex flex-col justify-start space-y-2 items-start">
              <span className="text-light_brown flex items-center space-x-2">
                <span>
                  <IconPhone />
                </span>
                <span>Phone</span>
              </span>
              <h4 className="">+91 1234567890</h4>
            </div>
            <div className="bg-pink text-dark_brown px-4 py-2 rounded flex flex-col justify-start space-y-2 items-start">
              <span className="text-light_brown flex items-center space-x-2">
                <span>
                  <IconClockHour9 />
                </span>
                <span>Timings</span>
              </span>
              <h4 className="">
                Monday to Friday <br /> 9:00 AM - 9:00 PM
              </h4>
            </div>
            <div className="bg-pink text-dark_brown px-4 py-2 rounded flex flex-col justify-start space-y-2 items-start">
              <span className="text-light_brown flex items-center space-x-2">
                <span>
                  <IconMail />
                </span>
                <span>E-mail</span>
              </span>
              <h4 className="">example@abc.com</h4>
            </div>
          </SimpleGrid>
        </Group>
        <Divider my="md" color="#E8E2C1" />
        <Group position="center" spacing="xs">
          <Text size="sm">© 2023, All rights reserved.</Text>
          <Text size="sm">
            Made with ❤️ by{' '}
            <Link
              href="https://github.com/NamanAg0502"
              target="_blank"
              style={{
                color: '#fff',
                textDecoration: 'underline',
                fontWeight: 'medium',
              }}
            >
              Naman Ag.
            </Link>
          </Text>
        </Group>
      </Container>
    </div>
  );
}
