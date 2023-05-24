import { BackgroundImage, Box, Button, Group, Text } from "@mantine/core";
import useHeaderStyles from "./Style/useHeaderStyle";
import ButtonMain from "@components/Button/ButtonMain";

type Props = {
  image: string;
  title: string;
  titleTwo: string;
  p: string;
};

const Header = ({ image, title, titleTwo, p }: Props) => {
  const { classes } = useHeaderStyles();
  return (
    <Box className={classes.head} mx="auto">
      <BackgroundImage
        src="https://www.cdc.gov/healthyyouth/protective/images/EDkQGdeXkAIiM0q.jpg?_=56749"
        radius="sm"
        className={classes.imgBox}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <Group className={classes.cols} position="center">
            <Text className={classes.first}>{title}</Text>
            <Text className={classes.two}>{titleTwo}</Text>
            <Box className={classes.line}></Box>
            <Text className={classes.three}>{p}</Text>
            <Button variant="contained" className={classes.btn}>
              Learn More
            </Button>
          </Group>
        </Box>
      </BackgroundImage>
    </Box>
  );
};

export default Header;
