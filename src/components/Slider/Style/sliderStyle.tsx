import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    head: {
      width: "100%",
    },
    carousel: {
      width: "90%",
      margin: "0 auto",
    },
    card: {
      width: "95%",
      border: "8px solid #fff",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px}",
    },
    img: {
      width: "100%",
      height: "30vh",
      margin: "0 auto",
      objectFit: "cover",
    },
    textItem: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "15px",
    },
    nameItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    iconItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
    },
    name: {
      fontSize: 24,
      fontWeight: 700,
    },
    iconLight: {
      color: "#FFC527",
    },
    priceItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontWeight: 700,
    },
    paper: {
      width: "100%",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },
    sendBtn: {
      backgroundColor: "#FFC527",
      "&hover": {
        border: "1px solid #FFC527",
      },
    },
  };
});

export default useStyles;
