import { Box, Image, Text, Title } from "@mantine/core";

import useCarRentHeaderStyle from "./useCarRentHeaderStyle";

const CarHeader = () => {
  const { classes } = useCarRentHeaderStyle();
  return (
    <Box>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>
            Hight Services For Every Costumer
          </Title>
          <Text fw={500} fz="lg" mb={5}></Text>
          <Text fz="sm" c="dimmed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            architecto consectetur eligendi sint aliquid iusto itaque! Fuga
            veritatis iure veniam.
          </Text>
        </div>
        <Image
          // src="https://blackfoxmotors.de/wp-content/uploads/2021/02/SAM_1211-1920x1280.jpg"
          src="/images/mersheader-removebg-preview.png"
          className={classes.image}
          alt="mers"
        />
      </div>
    </Box>
  );
};
export default CarHeader;
