import { IconEye, IconMessageCircle } from "@tabler/icons-react";
import {
  Card,
  Text,
  Group,
  Center,
  createStyles,
  getStylesRef,
  rem,
  Grid,
} from "@mantine/core";
import useGridCartStyle from "./useGridCartStyle";

interface ImageCardProps {
  data: any;
}

const GridCard = ({ data }: ImageCardProps) => {
  const { classes, theme } = useGridCartStyle();

  return (
    <Grid py={50}>
      {data?.map((item: any) => (
        <Grid.Col md={6} lg={3} key={item.id}>
          <Card
            p="lg"
            shadow="lg"
            className={classes.card}
            radius="md"
            component="a"
            target="_blank"
          >
            <div
              className={classes.image}
              style={{ backgroundImage: `url(${item?.image})` }}
            />
            <div className={classes.overlay} />

            <div className={classes.content}>
              <div>
                <Text size="lg" className={classes.title} weight={500}>
                  {item?.title}
                </Text>

                <Group position="apart" spacing="xs">
                  <Text size="sm" className={classes.author}>
                    {item?.author}
                  </Text>

                  <Group spacing="lg">
                    <Center>
                      <IconEye
                        size="1rem"
                        stroke={1.5}
                        color={theme.colors.dark[2]}
                      />
                      <Text size="sm" className={classes.bodyText}>
                        {item?.views}
                      </Text>
                    </Center>
                    <Center>
                      <IconMessageCircle
                        size="1rem"
                        stroke={1.5}
                        color={theme.colors.dark[2]}
                      />
                      <Text size="sm" className={classes.bodyText}>
                        {item?.comments}
                      </Text>
                    </Center>
                  </Group>
                </Group>
              </div>
            </div>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default GridCard;
