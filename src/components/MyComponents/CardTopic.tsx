import { Center, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import React from 'react';

interface Data {
  title: string;
  des: string;
  colorIcon: string;
  icon: any;
}

interface cardTopicProps {
  data: Data[];
}

export default function CardTopic({ data }: cardTopicProps) {
  const theme = useMantineTheme();

  return (
    <>
      {data.map((item, index) => (
        <Group
          key={index}
          spacing={24}
          p={24}
          w={390}
          sx={{
            borderRadius: 32,
            border: `1px solid ${theme.colors.light[1]}`,
            [theme.fn.smallerThan('1440')]: {
              width: 490,
            },
          }}
          align="flex-start"
        >
          <Center w={64} h={64} sx={{ background: `${item.colorIcon}`, borderRadius: '50%' }}>
            <item.icon />
          </Center>
          <Stack spacing={6}>
            <Text fw={600} fz={20} lh="32px" c={theme.colors.darkText[0]}>
              {item.title}
            </Text>
            <Text fw={400} fz={14} lh="24px" c={theme.colors.darkText[1]}>
              {item.des}
            </Text>
          </Stack>
        </Group>
      ))}
    </>
  );
}