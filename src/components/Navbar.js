'use client';

import { useState } from 'react';
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  rem,
  Text,
  Drawer,
  Menu,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: '#E8E2C1',
    borderBottom: 'none',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(60),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  logo: {
    fontWeight: 700,
    fontSize: rem(32),
    fontFamily: 'Hindi',
  },

  links: {
    width: rem(320),
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
      // display: 'none',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
    [theme.fn.smallerThan('sm')]: {
      color: theme.colors.dark[0],
      fontSize: theme.fontSizes.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: '#F4C5AC',
    },
    [theme.fn.smallerThan('sm')]: {
      '&, &:hover': {
        color: theme.colors.dark[9],
      },
    },
  },
}));

export function Navbar({ links }) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: link.active === true,
      })}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={60} className={classes.navbar}>
      <Container className={classes.inner} size="xl">
        <Menu withArrow shadow="md" width={150} onChange={toggle}>
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              className={classes.burger}
            />
          </Menu.Target>
          <Menu.Dropdown
            position="right"
            transition="pop"
            style={{
              backgroundColor: '#302532',
            }}
          >
            <Group
              style={{
                backgroundColor: '#302532',
                padding: '1rem',
                display: 'grid',
                gridTemplateColumns: '1fr',
              }}
              spacing={5}
            >
              {items}
            </Group>
          </Menu.Dropdown>
        </Menu>
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Link href="/">
          <h1 className={classes.logo}>Nrityashala</h1>
        </Link>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}
