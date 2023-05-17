import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import signinLocaleEn from "./locale";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <Container size={420} my={40} sx={{ height: "100vh" }}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        {signinLocaleEn.title}
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        {signinLocaleEn.have}

        <Anchor size="sm" component="button" onClick={handleSignUp}>
          {signinLocaleEn.create}
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            {signinLocaleEn.forget}
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          {signinLocaleEn.submit}
        </Button>
      </Paper>
    </Container>
  );
};
export default SignIn;
