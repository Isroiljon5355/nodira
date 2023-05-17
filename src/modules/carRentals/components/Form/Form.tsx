import {
  ActionIcon,
  Autocomplete,
  Box,
  Button,
  Grid,
  Group,
  Modal,
  useMantineTheme,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconClock } from "@tabler/icons-react";
import { useRef } from "react";
import RentModal from "../modal/RentModal";

type Props = {};

const Form = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const ref: any = useRef<HTMLInputElement>();

  const form = useForm({
    initialValues: {
      address: "",
      date: [],
      room: "",
      person: "",
    },
  });
  return (
    <>
      <Box
        my={20}
        p={35}
        sx={{
          width: "80%",
          margin: "0 auto",
          boxShadow:
            // "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px ",
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <Grid mx={"auto"}>
          <Grid.Col lg={4}>
            <Autocomplete
              placeholder="Enter your Address"
              label="Address"
              withAsterisk
              data={["Namangan", "Chust", "Chortoq", "Pop"]}
              {...form.getInputProps("address")}
            />
          </Grid.Col>
          <Grid.Col lg={4}>
            <DatePickerInput
              label="Select Date"
              placeholder="Select Date"
              mx="auto"
              maw={400}
              sx={{ width: "100%" }}
              {...form.getInputProps("date")}
            />
          </Grid.Col>
          <Grid.Col lg={4}>
            {/* <TimeInput
              label="Time"
              rightSection={
                <ActionIcon onClick={() => ref.current}>
                  <IconClock size="1rem" stroke={1.5} />
                </ActionIcon>
              }
              maw={400}
              mx="auto"
              {...form.getInputProps("time")}
            /> */}
            <TimeInput
              label="Click click icon to show browser picker"
              ref={ref}
              rightSection={
                <ActionIcon onClick={() => ref.current.showPicker()}>
                  <IconClock size="1rem" stroke={1.5} />
                </ActionIcon>
              }
              maw={400}
              mx="auto"
            />
          </Grid.Col>
        </Grid>
        <Group py={20} pl={10}>
          <Button
            px={35}
            variant="contained"
            onClick={open}
            sx={{ backgroundColor: "#FFC527", color: "#000" }}
          >
            Submit
          </Button>
        </Group>
      </Box>
      <Modal
        opened={opened}
        size={"xl"}
        onClose={close}
        title="COMPLETE RESERVATION"
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <RentModal close={close} />
      </Modal>
    </>
  );
};
export default Form;
