import {
  Accordion,
  ActionIcon,
  Box,
  Button,
  Card,
  Checkbox,
  Drawer,
  Group,
  NumberInput,
  Radio,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useRef, useState } from "react";
import useResBookingStyle from "./useResBookingStyle";
import {
  IconBrandBooking,
  IconCalendar,
  IconClock,
  IconPhoto,
  IconToolsKitchen2,
} from "@tabler/icons-react";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import Image from "next/image";
import { RestaurantItem } from "../restaurantItem/RestaurantItem";
import { useForm } from "@mantine/form";

type Props = {};

const BookingDrawer = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectRes, setSelectRes] = useState<any>(0);
  const { classes } = useResBookingStyle();
  const theme = useMantineTheme();

  const ref: any = useRef<HTMLInputElement>();
  const getColor = (color: string) =>
    theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  const form = useForm({
    initialValues: { person: "", date: "", time: "" },
  });

  const handleSelectRes = (values: any) => {
    setSelectRes(values);
  };

  return (
    <Accordion
      variant="separated"
      defaultValue="customization"
      className={classes.body}
    >
      <Accordion.Item value="customization">
        <Accordion.Control
          icon={<IconBrandBooking size={rem(20)} color={getColor("orange")} />}
        >
          <Text>Restaurant booking</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Box>
            <Card className={classes.card}>
              <form
                onSubmit={form.onSubmit((values) => handleSelectRes(values))}
              >
                <NumberInput
                  defaultValue={1}
                  placeholder="Enter Person"
                  label="Person"
                  withAsterisk
                  {...form.getInputProps("person")}
                />
                <DatePickerInput
                  dropdownType="modal"
                  label="Select Date"
                  placeholder="Select Date"
                  icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                  mx="auto"
                  maw={400}
                  sx={{ width: "100%" }}
                  withAsterisk
                  clearable
                  py={10}
                  {...form.getInputProps("date")}
                />
                <TimeInput
                  label="Time"
                  ref={ref}
                  rightSection={
                    <ActionIcon onClick={() => ref.current.showPicker()}>
                      <IconClock size="1rem" stroke={1.5} />
                    </ActionIcon>
                  }
                  maw={400}
                  mx="auto"
                  {...form.getInputProps("time")}
                />
                {selectRes.length > 0 ? (
                  <Card className={classes.select__restaurant}>
                    <ActionIcon>
                      <IconToolsKitchen2
                        size={rem(20)}
                        color={getColor("orange")}
                      />
                    </ActionIcon>
                    <Text>Select Restaurant</Text>
                  </Card>
                ) : null}

                <Group>
                  <Button
                    mt={20}
                    variant="contained"
                    fullWidth
                    className={classes.btn__booking}
                    type="submit"
                  >
                    Booking
                  </Button>
                </Group>
              </form>
            </Card>
          </Box>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default BookingDrawer;
