import React from "react";
import restaurantLocaleUz from "./locale";
import Header from "@components/Header/Header";
import BookingDrawer from "./components/bookingDrawer/BookingDrawer";
import { useDisclosure } from "@mantine/hooks";

type Props = {};

const Restaurant = (props: Props) => {
  return (
    <div>
      <Header
        image="/images/reataurant.avif"
        title={restaurantLocaleUz.title}
        titleTwo={restaurantLocaleUz.titleTwo}
        p={restaurantLocaleUz.p}
      />
      <BookingDrawer />
    </div>
  );
};
export default Restaurant;
