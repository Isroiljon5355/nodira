import { Avatar, Card, Grid, Group, Image, Text, Button } from "@mantine/core";
import useServiseRentStyle from "./useServiseRentStyle";
import carRentService from "@services/api/carRentService";
import carRentalsLocaleUz from "@modules/carRentals/locale";
interface ArticleCardVerticalProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

export function ServicesItem() {
  const { classes } = useServiseRentStyle();
  return (
    <Grid className={classes.box} py={25} my={20}>
      {carRentService.map((item: any) => (
        <Grid.Col md={6} lg={6} key={item?.id}>
          <Card withBorder radius="md" p={0} className={classes.card}>
            <Group noWrap spacing={0}>
              <Image src={item?.image} />
              <div className={classes.body}>
                <Text
                  transform="uppercase"
                  color="dimmed"
                  weight={700}
                  size="sm"
                >
                  {item?.category}
                </Text>
                <Text className={classes.title} mt="xs" mb="md">
                  {item?.title}
                </Text>
                <Group noWrap spacing="xs">
                  <Group spacing="xs" noWrap>
                    <Avatar size={20} src={item?.author.avatar} />
                    <Text size="xs">{item?.author.name}</Text>
                  </Group>
                </Group>
                <Group pt={10}>
                  <Button variant="contained" className={classes.readMore}>
                    {carRentalsLocaleUz.readMore}
                  </Button>
                </Group>
              </div>
            </Group>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
