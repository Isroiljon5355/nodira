import { Grid, Box, Tabs, Group } from "@mantine/core";
import { Image } from "@mantine/core";
import popularData from "./components/data";
import useStyles from "./Style/popularCartStyle";
import { GrGallery } from "react-icons/gr";
import popularCartLocaleEn from "./locale";

const PopularCart = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.head} py={40}>
      <Tabs color="yellow" variant="pills" radius={"lg"} defaultValue="gallery">
        <Group position="center">
          <Tabs.List>
            <Tabs.Tab value="gallery" icon={<GrGallery />}>
              {popularCartLocaleEn.all}
            </Tabs.Tab>
            <Tabs.Tab value="messages" icon={<GrGallery />}>
              {popularCartLocaleEn.hotel}
            </Tabs.Tab>
            <Tabs.Tab value="settings" icon={<GrGallery />}>
              {popularCartLocaleEn.restaurant}
            </Tabs.Tab>
          </Tabs.List>
        </Group>
        <Grid className={classes.section} m={0}>
          {popularData?.map((item: any) => (
            <Grid.Col
              md={6}
              lg={3}
              sm={6}
              key={item.id}
              className={classes.container}
            >
              <Tabs.Panel value="gallery" pt="xs">
                <Box className={classes.cart}>
                  <Image
                    radius="md"
                    src={item.image.src}
                    alt="Random unsplash image"
                    className={classes.image}
                  />
                </Box>
              </Tabs.Panel>
            </Grid.Col>
          ))}
        </Grid>
      </Tabs>
    </Box>
  );
};

export default PopularCart;
