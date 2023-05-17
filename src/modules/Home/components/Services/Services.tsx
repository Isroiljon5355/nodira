import { Box, Container, Text, Title } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import useStyles from "./Style/servicesStyle";
import servisDataBottom from "./components/data/dataButtom";
import servicesDataTop from "./components/data/dataTop";

const Services = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState<any>([]);
  const [activeBox, setActiveBox] = useState(0);

  const handleClick = (e: any) => {
    setActive(servisDataBottom.filter((el: any) => el.id === e.id));
    setActiveBox(e.id);
  };

  return (
    <Box className={classes.root} py={50}>
      <Container size="lg" className={classes.itemFlex}>
        {servicesDataTop.map((item: any) => (
          <Box key={item.id}>
            <Box
              className={cx(classes.item, {
                [classes.linkActive]: item.id === activeBox,
              })}
              // className={cx(classes.link, {
              //   [classes.linkActive]: item.id === activeId,
              // })}
              onClick={() => handleClick(item)}
            >
              <item.icon className={classes.icon} />
              <Text>{item.title}</Text>
            </Box>
          </Box>
        ))}
      </Container>
      <Container size="lg" className={classes.itemFlex}>
        {active.map((item: any) => (
          <Box className={classes.inner} key={item.id}>
            <Box className={classes.content}>
              <Title className={classes.title}>
                <Text>{item.title}</Text>
              </Title>

              <Text my={20}>{item?.descr_top}</Text>

              <Box className={classes.textItems} my={20}>
                <Text className={classes.flex}>
                  <BsFillCheckSquareFill className={classes.check} />
                  {item?.text_one}
                </Text>
                <Text className={classes.flex}>
                  <BsFillCheckSquareFill className={classes.check} />
                  {item?.text_two}
                </Text>
                <Text className={classes.flex}>
                  <BsFillCheckSquareFill className={classes.check} />
                  {item?.text_three}
                </Text>
                <Text className={classes.flex}>
                  <BsFillCheckSquareFill className={classes.check} />
                  {item?.text_four}
                </Text>
                <Text className={classes.flex}>
                  <BsFillCheckSquareFill className={classes.check} />
                  {item?.text_five}
                </Text>
              </Box>
              <Text>{item?.descr_bottom}</Text>
            </Box>
            <Box>
              <Box className={classes.cartImage}>
                <Image src={item?.image} alt="error" className={classes.img} />
              </Box>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};
export default Services;
