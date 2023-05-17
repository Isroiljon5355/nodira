import { Box, Container, Group, Text } from "@mantine/core";
import React from "react";
import useStyles from "./Style/textPartStyle";

type Props = {
  title: string;
  titleTwo: string;
};

const TextPart = ({ title, titleTwo }: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.head} py={"8%"}>
      <Group className={classes.cols} position="center">
        <Text className={classes.title}>{title}</Text>
        <Box className={classes.line}></Box>
        <Text>{titleTwo}</Text>
      </Group>
      <Group position="center">
        <Box className={classes.triangle}>.</Box>
      </Group>
    </Box>
  );
};

export default TextPart;
