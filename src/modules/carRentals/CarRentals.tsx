import TextPart from "@components/Text/TextPart";
import CarHeader from "./components/Header/Header";
import carRentalsLocaleUz from "./locale";

import useCarRentStyle from "./Style/useCarRentStyle";
import Form from "./components/Form/Form";
import { ServicesItem } from "./components/services/Services";
import Fleets from "./components/ourFleet/Fleets";
import { useMantineTheme } from "@mantine/core";

type Props = {};

const CarRentals = (props: Props) => {
  const { classes } = useCarRentStyle();

  return (
    <>
      <CarHeader />
      <Form />
      <TextPart
        title={carRentalsLocaleUz.servicesTitle}
        titleTwo={carRentalsLocaleUz.servicesTitleTwo}
      />
      <ServicesItem />
      <TextPart
        title={carRentalsLocaleUz.fleetTitle}
        titleTwo={carRentalsLocaleUz.fleetTitleTwo}
      />
      <Fleets />
    </>
  );
};
export default CarRentals;
