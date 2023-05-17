import GridCard from "@components/GridCard/GridCart";
import Header from "@components/Header/Header";
import TextPart from "@components/Text/TextPart";
import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";
import gridData from "@services/api/nationalholidatGrid";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import nationalHolidaysLocaleUz from "./locale";
type Props = {};

const NationalHolidays = (props: Props) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Carousel
        maw={"100%"}
        mx="auto"
        height={"100vh"}
        nextControlIcon={<IconArrowRight size={16} />}
        previousControlIcon={<IconArrowLeft size={16} />}
      >
        <Carousel.Slide maw={"100%"}>
          <Header
            image="/images/namflowers.jpg"
            title={nationalHolidaysLocaleUz.welcome}
            titleTwo={nationalHolidaysLocaleUz.titleTwo}
            p={nationalHolidaysLocaleUz.textMore}
          />
        </Carousel.Slide>
        <Carousel.Slide maw={"100%"}>
          <Header
            image=""
            title={nationalHolidaysLocaleUz.welcome}
            titleTwo={nationalHolidaysLocaleUz.titleTwo}
            p={nationalHolidaysLocaleUz.textMore}
          />
        </Carousel.Slide>
      </Carousel>
      {/* <Group position="center">
        <DateBox data={data} />
      </Group> */}

      <TextPart
        title={nationalHolidaysLocaleUz.gridCartTitle}
        titleTwo={nationalHolidaysLocaleUz.gridCartTitleTwo}
      />

      <GridCard data={gridData} />

      {/* <TextPart
        title={nationalHolidaysLocaleUz.statisicsTitle}
        titleTwo={nationalHolidaysLocaleUz.statisicsTitleTwo}
      /> */}
    </Box>
  );
};

export default NationalHolidays;
