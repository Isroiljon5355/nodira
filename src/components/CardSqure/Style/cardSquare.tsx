import { createStyles } from "@mantine/core";

const useSttyles = createStyles(() => {
  return {
    container: {
      width: "85%",
      margin: "0 auto",
      padding: "50px 0 ",
    },
    head: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
    },

    title: {
      fontWeight: 900,
    },
    icon__group: {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      gap: 10,
    },
    icons: {
      color: "#FFC527",
    },
    icon__free__services: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 7,
    },
    flex__btn: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      fontSize: 14,
    },
    booking__btn: {
      width: "100%",
      backgroundColor: "#FFC527",

      "&:hover": {
        backgroundColor: "#000",
        border: "1px solid #FFC527",
      },
    },
    price: {
      fontSize: 24,
      fontWeight: 700,
    },
  };
});

export default useSttyles;
