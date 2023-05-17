import {
  createStyles,
  Card,
  Image,
  Avatar,
  Text,
  Group,
  Box,
  Button,
  Grid,
} from "@mantine/core";
import useStyles from "./Style/cardSearchStyle";
import { AiFillStar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaWifi, FaGlassMartini, FaDumbbell } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import cardSerchResaultData from "./data/data";
const CardSearchResault: React.FC<{
  data: string[];
  inputsrch: string[];
}> = ({ data, inputsrch }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.cardItem} px={30}>
      <Grid>
        {(inputsrch?.length > 0 ? inputsrch : cardSerchResaultData).map(
          (item: any) => (
            <Box key={item.id}>
              <Card withBorder radius="md" p={0} className={classes.card}>
                <Grid.Col>
                  <Box>
                    <Image
                      src={item?.imageGeneral}
                      alt="img"
                      height={200}
                      width={250}
                    />
                  </Box>
                </Grid.Col>
                <Grid.Col>
                  <Box className={classes.item__right}>
                    <Box className={classes.title__item}>
                      <Text className={classes.title}>{item?.title}</Text>
                      <Text className={classes.discount}>
                        {item?.discount}% off
                      </Text>
                    </Box>
                    <Box className={classes.location}>
                      <Box className={classes.icon__group}>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </Box>
                      <HiLocationMarker color="red" size={24} />
                      <Text className={classes.map} color="blue">
                        {item?.address} view on map 2 km from the center
                      </Text>
                    </Box>
                    <Box className={classes.services__icon}>
                      <FaWifi />
                      <ImSpoonKnife />
                      <FaGlassMartini />
                      <FaDumbbell />
                      <FiMonitor />
                    </Box>
                    <Text className={classes.descr}>{item?.descr}</Text>
                    <Box className={classes.item__btn}>
                      <Box className={classes.ball__view}>
                        <Box className={classes.square}>{item?.viewNumber}</Box>
                        <Text className={classes.view}>{item?.view}</Text>
                      </Box>
                      <Button className={classes.buy__btn}>Search</Button>
                    </Box>
                  </Box>
                </Grid.Col>
              </Card>
            </Box>
          )
        )}
      </Grid>
    </Box>
  );
};

export default CardSearchResault;
