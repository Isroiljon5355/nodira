import React, { useState } from "react";
import { Box, Group, Modal, Text } from "@mantine/core";
import useStayles from "./Style/videoPlayStyle";
import videoPlayLocaleEn from "./locale";
import { BsFillPlayCircleFill } from "react-icons/bs";
import img from "@assets/Namangan1.jpg";
import YoutubeVideo from "./components/YoutubeVideo";

const VideoPlay = () => {
  const { classes } = useStayles();
  const [opened, setOpened] = useState(false);

  return (
    <Box className={classes.bg}>
      <Box className={classes.head}>
        <Text className={classes.titleOne}>{videoPlayLocaleEn.great}</Text>
        <Text className={classes.titleTwo}> {videoPlayLocaleEn.tourist}</Text>
        <Box className={classes.line}></Box>
        <Box className={classes.iconItem}>
          <Text>{videoPlayLocaleEn.click}</Text>
          <BsFillPlayCircleFill
            className={classes.icon}
            onClick={() => setOpened(true)}
          />
          <Text>{videoPlayLocaleEn.watch}</Text>
        </Box>
      </Box>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Beautiful Namangan."
        size={"70%"}
      >
        <YoutubeVideo />
      </Modal>
    </Box>
  );
};

export default VideoPlay;
