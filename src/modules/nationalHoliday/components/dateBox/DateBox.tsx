import { Box, Text } from "@mantine/core";
import React from "react";
import useDataStyle from "../dateBox/style/useDataBox";

interface StatsGroupProps {
  data: { title: string; stats: string; description: string }[];
}
const DateBox = ({ data }: StatsGroupProps) => {
  const { classes } = useDataStyle();

  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return (
    <Box className={classes.head}>
      <div className={classes.root}>{stats}</div>
    </Box>
  );
};

export default DateBox;
