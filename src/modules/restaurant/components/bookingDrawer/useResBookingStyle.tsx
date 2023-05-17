import { createStyles } from "@mantine/core";

const useResBookingStyle = createStyles((theme) => {
  return {
    body: {
      position: "fixed",
      top: "27%",
      right: 0,
      border: "2px  solid  #FFC527",
      zIndex: 9,
   
    },
    card: {
      width: "300px",
      height: "60vh",
      overflow: "auto",
    },
    select__restaurant: {
      display: "flex",
    },
    restairantItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    restairant__scrool: {
      overflow: "clip",
    },
    btn__booking: {
      background: "#FFC527",
      color: "#000",
    },
  };
});
export default useResBookingStyle;
