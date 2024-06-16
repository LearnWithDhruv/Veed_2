// components/Navbar.js
import React from 'react';
import { Header, Group, Title, Container, Button, MediaQuery, Burger, useMantineTheme } from '@mantine/core';

function Navbar() {
  const theme = useMantineTheme();

  return (
    <Header height={60} mb={120}>
      <Container className="w-full p-8 sticky top-0 left-0 z-30">
        <Group position="apart" className="bg-[#E6E8E8] backdrop-blur-3xl p-2 px-8 rounded-full border-[1px] border-white shadow-sm">
          <Title order={1} className="font-bold font-bebas text-4xl tracking-wide">VEED</Title>
          <Group spacing="lg" className="hidden md:flex">
            <Button variant="subtle">Products</Button>
            <Button variant="subtle">Use Case</Button>
            <Button variant="subtle">Resources</Button>
            <Button variant="subtle">For Business</Button>
            <Button variant="subtle">Pricing</Button>
          </Group>
          <Group spacing="lg" className="hidden md:flex">
            <Button variant="subtle">Book A Demo</Button>
            <Button variant="filled" color="dark">Login</Button>
            <Button variant="filled" color="blue">Sign Up</Button>
          </Group>
          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Burger opened={false} onClick={() => {}} size="sm" color={theme.colors.gray[6]} />
          </MediaQuery>
        </Group>
      </Container>
    </Header>
  );
}

export default Navbar;
