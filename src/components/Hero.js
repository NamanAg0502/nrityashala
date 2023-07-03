'use client';

import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  hero: {
    backgroundColor: '#E8E2C1',
    minHeight: `calc(100vh - ${theme.spacing.xl} * 8)`,
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      paddingTop: 0,
    },
  },

  content: {
    maxWidth: '56%',
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
      textAlign: 'center',
    },
  },

  title: {
    color: '#302532',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,
    paddingBottom: 24,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan('md')]: {
      width: '100%',
      maxWidth: 400,
      marginTop: theme.spacing.xl,
      marginBottom: theme.spacing.xl,
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: '#F4C5AC',
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    width: '100%',
    [theme.fn.smallerThan('md')]: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  return (
    <div className={classes.hero}>
      <Container size="xl" className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span
                style={{
                  fontFamily: 'Hindi',
                  fontSize: rem(48),
                  fontWeight: 900,
                }}
              >
                Namaste{' '}
              </span>
              and a warm embrace to{' '}
              <span className={classes.highlight}>Nrityashala</span>
            </Title>
            <Text color="#9F2F26" mt="xl" fz="lg" className="hidden sm:block">
              We are delighted to have you join us on this extraordinary voyage
              into the world of Kathak dance. Discover the power of each
              footstep, the magic of intricate hand movements, and the language
              of emotions. Let our experienced instructors guide you through
              this enchanting journey, where tradition meets innovation, and
              artistic expression knows no bounds.
            </Text>

            <Group mt={30} className={classes.buttonGroup}>
              <Button
                variant="filled"
                radius="xl"
                size="md"
                style={{
                  backgroundColor: '#9F2F26',
                  color: 'white',
                }}
              >
                Join Classes
              </Button>
              <Button
                radius="xl"
                size="md"
                style={{ color: '#9F2F26', backgroundColor: 'transparent' }}
              >
                Learn More
              </Button>
            </Group>
          </div>
          <Image src="/images/home/kathak.jpg" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
