import CardSquare from "@components/CardSqure/CardSquare";
import TextPart from "@components/Text/TextPart";
import {
  Autocomplete,
  BackgroundImage,
  Box,
  Button,
  Grid,
  Group,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "dayjs/locale/de";
import { useState } from "react";
import useStyles from "./Style/hotelStyle";
import dataPopularHotel from "./components/dataPopularHotel";
import SearchResault from "./components/searchResault/SearchResault";
import hotelLocaleUz from "./locale";
import cardSerchResault from "@components/CardSearchResault/data/data";
import { useForm } from "@mantine/form";
import cardSerchResaultData from "@components/CardSearchResault/data/data";

type Props = {};

const Hotel = (props: Props) => {
  const { classes } = useStyles();
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [srchAns, setSrchAns] = useState<any>([]);

  const form = useForm({
    initialValues: {
      address: "",
      date: [],
      room: "",
      person: "",
    },
  });

  const addSearchCtg = (e: any) => {
    if (e.title === "All") {
      setSrchAns(cardSerchResault);
    } else {
      const res = cardSerchResaultData.filter(
        (item: any) => item?.category === e.title
      );
      setSrchAns(res);
    }
  };

  return (
    <Box className={classes.head}>
      <BackgroundImage
        src="https://namangansquare.com/wp-content/uploads/2020/05/nsq-apartments-img-80.jpg"
        // src={imgBg}
        radius="sm"
        className={classes.background}
      >
        <Box className={classes.backdrop}>
          <Box className={classes.inputGroup}>
            <Grid mx={"auto"}>
              <Grid.Col md={6} lg={3}>
                <Autocomplete
                  placeholder="Enter your Address"
                  label={hotelLocaleUz.location}
                  withAsterisk
                  data={["Namangan", "Chust", "Chortoq", "Pop"]}
                  {...form.getInputProps("address")}
                />
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                <DatePickerInput
                  type="range"
                  label="Select Date"
                  placeholder="Select Date"
                  mx="auto"
                  maw={400}
                  sx={{ width: "100%" }}
                  {...form.getInputProps("date")}
                />
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                <Autocomplete
                  label="Select Room"
                  placeholder="Enter your Room"
                  data={["1x", "2x", "3x", "4x", "5x"]}
                  {...form.getInputProps("room")}
                />
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                <Autocomplete
                  label="Person"
                  placeholder="Person"
                  data={["1-3", "3-5", "5-7"]}
                  {...form.getInputProps("person")}
                />
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                <Button className={classes.searchBtn}>
                  {hotelLocaleUz.btnSearch}
                </Button>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </BackgroundImage>
      <SearchResault data={srchAns} addSearchCtg={addSearchCtg} />
      <TextPart
        title={hotelLocaleUz.popularHotelTitle}
        titleTwo={hotelLocaleUz.popularHotelDescr}
      />
      <CardSquare data={dataPopularHotel} />
    </Box>
  );
};
export default Hotel;
