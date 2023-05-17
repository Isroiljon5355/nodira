import { Carousel } from "@mantine/carousel";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Container,
  Box,
} from "@mantine/core";
import ourFleetsData from "@services/api/ourFleets";

const Fleets = () => {
  return (
    <Box my={30} py={30} sx={{ width: "80%", margin: "0 auto" }}>
      <Carousel
        // withIndicators
        height={"auto"}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {ourFleetsData.map((item) => (
          <Carousel.Slide key={item?.id}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={item?.image} height={200} alt="car" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>${item?.day}/day</Text>
                <Badge color="pink" variant="light">
                  more
                </Badge>
              </Group>

              <Text size="sm" color="dimmed" weight={700}>
                {item?.name}
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Booking now
              </Button>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};
export default Fleets;
