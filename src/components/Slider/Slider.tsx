import { Carousel } from "@mantine/carousel";
import { Avatar, Button, Grid, Group, Paper, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import useStyles from "./Style/sliderStyle";
import dataGit from "./components/data";

const Slider = () => {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Grid py={30} m={0}>
      <Carousel
        withIndicators
        slideSize="33.333333%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop={true}
        plugins={[autoplay.current]}
        align="start"
        withControls={false}
        className={classes.carousel}
        p={"5%"}
      >
        {dataGit.map((git: any) => (
          <Carousel.Slide key={git.id}>
            <Grid.Col md={12} lg={12}>
              <Paper radius="md" withBorder p="lg" className={classes.paper}>
                <Avatar
                  src="/images/git.jfif"
                  size={120}
                  radius={120}
                  mx="auto"
                />
                <Text ta="center" fz="lg" weight={500} mt="md">
                  {git?.name}
                </Text>
                <Text ta="center" c="dimmed" fz="sm">
                  {git?.email}
                </Text>
                <Group mt="md" position="center" spacing={30}>
                  {git?.prices.map((price: any, idx: number) => (
                    <div key={idx}>
                      <Text ta="center" fz="lg" fw={500}>
                        {price.value}
                      </Text>
                      <Text ta="center" fz="sm" c="dimmed">
                        {price.label}
                      </Text>
                    </div>
                  ))}
                </Group>
                <Button
                  variant="default"
                  fullWidth
                  mt="md"
                  className={classes.sendBtn}
                >
                  Send message
                </Button>
              </Paper>
            </Grid.Col>
          </Carousel.Slide>
        ))}
        {/* ...other slides */}
      </Carousel>
    </Grid>
  );
};
export default Slider;
