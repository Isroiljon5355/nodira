import { Box, Grid, Image, Tabs } from "@mantine/core";
import historyData from "@services/api/historyData";

const OldCart = () => {
  //   const { classes } = useStyles();

  return (
    <Box py={40}>
      <Grid px={10}>
        {historyData?.map((item: any) => (
          <Grid.Col md={6} lg={3} sm={6} key={item.id}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                height: "250px",
              }}
            >
              <Image
                radius="md"
                src={item.image}
                alt="Random unsplash image"
                sx={{ height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default OldCart;
