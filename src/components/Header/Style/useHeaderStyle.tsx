import { createStyles } from "@mantine/core";

const useHeaderStyles = createStyles((theme) => {
  return {
    head: {
      maxWidth: "100%",
      height: "90vh",
    },
    imgBox: {
      width: "100%",
      height: "90vh",
    },
    cols: {
      width: "70%",
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      paddingTop: "8%",
    },
    first: {
      color: "white",
      fontSize: "80px",
      fontWeight: 700,

      [theme.fn.smallerThan("xs")]: {
        width: "100%",
        fontSize: 36,
        lineHeight: 1.3,
      },
    },
    two: {
      color: "#FFC527",
      fontSize: "64px",
      fontWeight: 700,

      [theme.fn.smallerThan("xs")]: {
        width: "100%",
        fontSize: 32,
        lineHeight: 1.3,
      },
    },
    line: {
      width: "20%",
      height: "2px",
      background: "#FFC527",
    },
    three: {
      width: "60%",
      color: "white",
      fontSize: "18px",
      [theme.fn.smallerThan("xs")]: {
        width: "100%",
        fontSize: 14,
        lineHeight: 1.3,
      },
    },
    btn: {
      width: "25%",
      height: "50px",
      backgroundColor: "#FFC527",
      color: "#000",
      "&:hover": {
        transition: "0.5s ease",
        backgroundColor: "rgba(0,0,0,0.7)",
        border: "1px solid #FFC527",
        color: "#fff",
      },
      "&:active": {
        color: theme.white,
      },
      [theme.fn.smallerThan("xs")]: {
        width: "150px",
      },
    },
  };
});
export default useHeaderStyles;
