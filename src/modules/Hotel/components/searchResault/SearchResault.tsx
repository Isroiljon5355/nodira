import CardSearchResault from "@components/CardSearchResault/CartSearchResault";
import Pagenation from "@components/Pagination/Pagination";
import { RangeSliders } from "@components/RengeSlider/RengeSliders";
import Maps from "@components/map/Map";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Group,
  Radio,
  Text,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import hotelLocaleUz from "@modules/Hotel/locale";
import categoryData from "@services/api/categoryData";
import "dayjs/locale/de";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import useSearchResStyle from "./style/useSearchResStyle ";
import { useForm } from "@mantine/form";
import cardSerchResaultData from "@components/CardSearchResault/data/data";

const maps =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96400.1236573009!2d71.57458269966689!3d40.970446406753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c1b2e60eea5%3A0x36ef7252c4c12106!2sNamangan%2C%20Uzbekistan!5e0!3m2!1sen!2sru!4v1679151939723!5m2!1sen!2sru";

type Props = {
  data: any;
  addSearchCtg: any;
};

const SearchResault = ({ data, addSearchCtg }: Props) => {
  const { classes } = useSearchResStyle();
  const [srchRes, setSrchRes] = useState<any>();
  console.log(srchRes);

  const form = useForm({
    initialValues: {
      address: "",
      date: [],
      room: "",
      person: "",
    },
  });

  const submitSearch = () => {
    const res = cardSerchResaultData.filter(
      (item: any) => item.address.trim() === form.values.address.trim()
    );

    setSrchRes(res);
  };

  return (
    <Box className={classes.group}>
      <Grid className={classes.item__left} mx={5} gutter={"2xl"}>
        <Grid.Col className={classes.cart__search} xl={12}>
          <Group position="center">
            <Autocomplete
              placeholder="Enter your Address"
              label={hotelLocaleUz.location}
              withAsterisk
              data={["Namangan", "Chust", "Chortoq", "Pop"]}
              sx={{ width: "80%" }}
              {...form.getInputProps("address")}
            />
            <DatePickerInput
              type="range"
              label="Select Date"
              placeholder="Select Date"
              mx="auto"
              maw={400}
              sx={{ width: "80%" }}
              {...form.getInputProps("date")}
            />
            <Autocomplete
              label="Select Room"
              placeholder="Enter your Room"
              data={["1x", "2x", "3x", "4x", "5x"]}
              sx={{ width: "80%" }}
              {...form.getInputProps("room")}
            />
            <Autocomplete
              label="Person"
              placeholder="Person"
              data={["1-3", "3-5", "5-7"]}
              sx={{ width: "80%" }}
              {...form.getInputProps("person")}
            />
            <Button onClick={submitSearch} className={classes.searchBtn}>
              {hotelLocaleUz.btnSearch}
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col>
          <Box>
            <Maps width={200} height={100} please={maps} />
          </Box>
        </Grid.Col>
        <Grid.Col>
          {/* filter */}

          <Box className={classes.filter}>
            <Text className={classes.title}>Select Price</Text>
            <RangeSliders />
            <Text>Category</Text>

            <Radio.Group name="" label="" description="" withAsterisk>
              {(categoryData || srchRes).map((item: any) => (
                <Group mt="xs" key={item?.id}>
                  <Radio
                    value={item?.title}
                    label={item?.title}
                    onClick={() => addSearchCtg(item)}
                  />
                </Group>
              ))}
            </Radio.Group>
          </Box>
        </Grid.Col>
        <Grid.Col>
          <Box className={classes.filter}>
            <Text className={classes.title}>Star Category</Text>
            <Box>
              <Box className={classes.star__flex}>
                <Text>3 Star</Text>
                <Box className={classes.icon__star}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </Box>
              </Box>
              <Box className={classes.star__flex}>
                <Text>2 Star</Text>
                <Box className={classes.icon__star}>
                  <AiFillStar />
                  <AiFillStar />
                </Box>
              </Box>
              <Box className={classes.star__flex}>
                <Text>1 Star</Text>
                <Box className={classes.icon__star}>
                  <AiFillStar />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>

      <CardSearchResault data={data} inputsrch={srchRes} />
      {data.length > 4 ? <Pagenation /> : null}
    </Box>
  );
};

export default SearchResault;
