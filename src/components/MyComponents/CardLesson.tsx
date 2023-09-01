import { Center, Group, Progress, Stack, Text, useMantineTheme } from '@mantine/core';
import React from 'react';

interface Data {
  title: string;
  time: string;
  des: string;
  colorIcon: string;
  icon: any;
  colorProgress: string;
  valueProgress: number;
}

interface cardLessonProps {
  data: Data[];
}

export default function CardLesson({ data }: cardLessonProps) {
  const theme = useMantineTheme();

  return (
    <>
      {data.map((item, index) => (
        <Group
          key={index}
          spacing={24}
          p={24}
          w={390}
          h="fit-content"
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
          <Stack spacing={24}>
            <Stack spacing={0}>
              <Text fw={400} fz={14} lh="24px" c={theme.colors.darkText[1]}>
                -{item.time}
              </Text>
              <Text fw={600} fz={20} lh="32px" c={theme.colors.darkText[0]} pt={2} pb={6}>
                {item.title}
              </Text>
              <Text fw={400} fz={14} lh="24px" c={theme.colors.darkText[1]}>
                {item.des}
              </Text>
            </Stack>
            <Group position="apart">
              <Progress
                value={item.valueProgress}
                styles={{
                  root: {
                    background: theme.colors.light[1],

                    width: 198,

                    borderRadius: 4,
                    border: `1px solid ${theme.colors.light[1]}`,

                    [theme.fn.smallerThan('1440')]: {
                      width: 298,
                    },
                  },
                  bar: { background: `${item.colorProgress}` },
                }}
              />
              <Text fw={500} fz={12} lh="16px" c={theme.colors.darkText[0]}>
                {item.valueProgress}%
              </Text>
            </Group>
          </Stack>
        </Group>
      ))}
    </>
  );
}