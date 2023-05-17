import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    label: {
      top: 0,
      height: 28,
      lineHeight: "28px",
      width: 34,
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 700,
      backgroundColor: "transparent",
    },

    thumb: {
      backgroundColor: theme.colors[theme.primaryColor][6],
      height: 28,
      width: 34,
      border: "none",
    },

    dragging: {
      transform: "translate(-50%, -50%)",
    },
    head: {
      width: "100%",
      height: "100%",
    },
    background: {
      width: "100%",
      height: "90vh",
    },
    backdrop: {
      width: "100%",
      height: "90vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "absolute",
    },
    inputGroup: {
      width: "65%",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      // backgroundColor: "rgba(0,0,0,0.8)",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[9] : "#fff",
      position: "relative",
      top: "80%",
      padding: 25,
      "@media (max-width: 800px)": {
        top: "30%",
      },
    },
    inputItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "35px",
    },
    searchBtn: {
      marginTop: "2.5%",
      padding: "10px 30px",
      backgroundColor: "#FFC527",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.8)",
        border: "1px solid #FFC527",
      },
    },
    searchBtn__down: {
      marginTop: "2.5%",
      padding: "10px 30px",
      backgroundColor: "rgba(0,0,0,0.8)",
      "&:hover": {
        border: "1px solid #FFC527",
      },
    },
    group: {
      width: "85%",
      margin: "10% auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      "@media (max-width: 576px)": {
        flexDirection: "column",
      },
    },
    item__left: {
      width: "20%",
      "@media (max-width: 576px)": {
        width: "100%",
      },
    },
    item__right: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      width: "80%",
      gap: 30,
      "@media (max-width: 576px)": {
        width: "100%",
      },
    },
    cart__search: {
      width: "100%",
      height: "45vh",
      backgroundColor: "#FFC527",
    },

    filter: {
      width: "100%",
      height: "auto",
      border: "2px solid #FFC527",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    },
    star__flex: {
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontWeight: 900,
    },
    icon__star: {
      color: "#FFC527",
    },
  };
});
export default useStyles;
