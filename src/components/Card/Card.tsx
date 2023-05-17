import React, { useRef } from "react";
import { cardDatas } from "./data/data";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import useStyles from "./styles/cardStyle";
import { Box, Text } from "@mantine/core";
import { IoMdPerson } from "react-icons/io";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const Card = () => {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Box>
      <Carousel
        className={classes.carousel}
        sx={{ maxWidth: 1000 }}
        mx="auto"
        withIndicators
        my={50}
        loop={true}
        plugins={[autoplay.current]}
        withControls={false}
      >
        {cardDatas.map((cardData: any) => (
          <Carousel.Slide key={cardData.id}>
            <Image
              src={cardData?.image}
              className={classes.image}
              alt="error"
              width={150}
              height={150}
            />
            <Text className={classes.text}>{cardData?.text}</Text>
            <Box className={classes.wrap}>
              <Box>
                <IoMdPerson />
              </Box>
              <Text className={classes.p}>{cardData.p}</Text>
              <Link className={classes.link} href="#">
                {cardData?.link}
              </Link>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default Card;
