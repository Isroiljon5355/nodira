import { createStyles, RangeSlider, rem } from "@mantine/core";
import { IconPoint, IconGripVertical } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  mark: {
    display: "none",
  },

  markWrapper: {
    marginTop: rem(12),
  },

  thumb: {
    width: rem(16),
    height: rem(28),
    backgroundColor: theme.white,
    color: theme.colors.gray[5],
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[3]
    }`,
  },
}));

const point = (
  <IconPoint size={10} style={{ marginTop: rem(6) }} stroke={1.5} />
);

export function RangeSliders() {
  const { classes } = useStyles();
  return (
    <RangeSlider
      mt="xl"
      mb="xl"
      classNames={classes}
      defaultValue={[0, 50]}
      thumbChildren={<IconGripVertical size="1.2rem" stroke={1.5} />}
      marks={[
        { value: 0, label: "0" },
        { value: 12.5, label: point },
        { value: 25, label: "50" },
        { value: 37.5, label: point },
        { value: 50, label: "100" },
        { value: 62.5, label: point },
        { value: 75, label: "500" },
        { value: 87.5, label: point },
        { value: 100, label: "1000" },
      ]}
    />
  );
}
