import {
  Box,
  Button,
  Grid,
  Group,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCalendar, IconClock, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import useRentmodalStyle from "./useRentmodalStyle";
import { toast } from "react-toastify";
import { type } from "os";
import { log } from "console";

type Props = {
  close: any;
};

const RentModal = ({ close }: Props) => {
  const { classes } = useRentmodalStyle();
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    },
    // validate: _
    //   firstName: (value) => value.trim().length < 2,
    //   lastName: (value) => value.trim().length < 2,
    //   email: (value) => !/^\S+@\S+$/.test(value),
    //   address: (value) => value.trim().length === 0,
    // },
  });

  const notify = () => toast("Success! ");

  return (
    <>
      <Grid pt={20}>
        <Grid.Col md={6} lg={6}>
          <Text>Location $ Date</Text>
          <Box>
            <Text weight={600} size={24} className={classes.text__icon}>
              <IconMapPin />
              Address
            </Text>
            <Text pl={35}>asdad</Text>

            <Text weight={600} size={24} className={classes.text__icon}>
              <IconCalendar />
              Selected Date:
            </Text>
            <Text pl={35}>asd</Text>

            <Text weight={600} size={24} className={classes.text__icon}>
              <IconClock />
              Time:
            </Text>
            <Text pl={35}>asd</Text>
          </Box>
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
          <Text weight={600} size={24} py={25}>
            Car:name
          </Text>
          <Image src="/images/audi.jpg" alt="image" width={300} height={200} />
        </Grid.Col>
      </Grid>
      <form onSubmit={form.onSubmit(() => {})}>
        <Title
          order={2}
          size="h3"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={600}
          align="center"
          pt={20}
        >
          PERSONAL INFORMATION
        </Title>

        <SimpleGrid
          cols={2}
          mt="xl"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <TextInput
            required
            label="First Name"
            placeholder="Your name"
            name="firstName"
            variant="filled"
            {...form.getInputProps("firstName")}
          />
          <TextInput
            required
            label="Last Name"
            placeholder="Your Last Name"
            name="lastName"
            variant="filled"
            {...form.getInputProps("lastName")}
          />
          <TextInput
            required
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
          <TextInput
            required
            label="Phone Number"
            placeholder="Your phone number"
            name="phone"
            variant="filled"
            {...form.getInputProps("phone")}
          />
        </SimpleGrid>

        <TextInput
          required
          label="Address"
          placeholder="Your Address"
          mt="md"
          name="address"
          variant="filled"
          {...form.getInputProps("address")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />

        <Group position="center" mt="xl" onClick={() => {}}>
          <Button
            type="submit"
            size="md"
            variant="contained"
            className={classes.submitBtn}
          >
            Booking
          </Button>
        </Group>
      </form>
    </>
  );
};
export default RentModal;
