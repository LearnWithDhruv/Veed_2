// components/Cards.js
import React from 'react';
import { Card, Text, Button, Group, Badge, Container, SimpleGrid, Box, Title, List, ThemeIcon } from '@mantine/core';
import { Check } from 'tabler-icons-react';

function Cards() {
  const data = [
    {
      title: "Basic",
      subtitle: "Ideal Starter Pack",
      price: "₹290.67",
      offer: "SAVE 36%",
      button: "Go Basic",
      points: [
        "Remove watermark",
        "Subtitles 12 hr/yr",
        "No Upload Size Limit",
        "Full HD 1080p Exports",
      ],
    },
    {
      title: "Pro",
      subtitle: "For pro video creation",
      price: "₹599",
      offer: "SAVE 21%",
      button: "Go Pro",
      points: [
        "Subtitles 24 hr/yr",
        "Clean Audio",
        "Eye Contact Correction",
        "Stock Audio & Video Library",
        "Download Subtitles",
      ],
    },
    {
      title: "Business",
      subtitle: "For up to 5 people",
      price: "₹1500",
      offer: "SAVE 14%",
      button: "Go Business",
      points: [
        "AI Avatars 4 hr/yr",
        "Subtitles 134 hr/yr",
        "Translate to 50+ Languages",
        "Text to Speech 60 hr/yr",
        "Customizable Video Templates",
        "4k Export Quality",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Scale video across your team",
      price: "Let's Talk",
      offer: "Contact Us",
      button: "Book a Demo",
      points: [
        "Personalized AI avatars",
        "Brand assets & templates",
        "Multiple workspaces",
        "Custom usage limits",
        "Creator training",
        "Account manager",
      ],
    },
  ];

  return (
    <Container py="xl">
      <SimpleGrid cols={1} spacing="lg" breakpoints={[{ minWidth: 'md', cols: 2 }]}>
        {data.map((item, index) => (
          <Card shadow="sm" padding="lg" key={index} withBorder={index === 1} style={{ borderColor: index === 1 ? '#6474FF' : 'transparent' }}>
            {index === 1 && (
              <Badge color="blue" variant="filled" size="lg" style={{ position: 'absolute', top: 10, right: 10 }}>
                RECOMMENDED
              </Badge>
            )}
            <Title order={2}>{item.title}</Title>
            <Text>{item.subtitle}</Text>
            <Group mt="md" spacing="xs">
              <Text weight={500} size="xl">{item.price}</Text>
              <Badge color="green" variant="light">{item.offer}</Badge>
            </Group>
            <Text size="xs" color="dimmed">Per user / month, billed yearly</Text>
            <Box mt="md" mb="sm">
              <Button fullWidth variant={index === 1 ? "filled" : "outline"} color={index === 1 ? "blue" : "gray"}>
                {item.button}
              </Button>
            </Box>
            <List spacing="xs" size="sm" icon={
              <ThemeIcon color="teal" size={20} radius="xl">
                <Check size={14} />
              </ThemeIcon>
            }>
              {item.points.map((point, idx) => (
                <List.Item key={idx}>{point}</List.Item>
              ))}
            </List>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Cards;
