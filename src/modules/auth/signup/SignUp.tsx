import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  ButtonProps,
  Box,
} from "@mantine/core";

import signupLocaleEn from "./locale";

const SignUp = (props: PaperProps) => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Box sx={{ height: "100vh" }}>
      <Paper
        radius="md"
        p="xl"
        withBorder
        {...props}
        maw={500}
        mx={"auto"}
        my={100}
      >
        <Group position="center">
          <Text size="xl" weight={700}>
            {signupLocaleEn.title}
          </Text>
        </Group>

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput required label="Name" placeholder="Name" radius="md" />

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />

            <Divider
              label="Or continue with email"
              labelPosition="center"
              my="lg"
            />
            <Button type="submit">{signupLocaleEn.title}</Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};
export default SignUp;
