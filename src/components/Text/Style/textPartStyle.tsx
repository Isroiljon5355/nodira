import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    head: {
      position: "relative",
      width: "100%",
      backgroundColor: theme.colorScheme === "dark" ? "#000" : "#fff",
      borderTop: "1px solid #FFC527",
      borderBottom: "1px solid #FFC527",
    },
    triangle: {
      position: "absolute",
      bottom: "-24px",
      width: "50px",
      clipPath: "polygon(100% 0, 0 0, 50% 100%)",
      backgroundColor: theme.colorScheme === "dark" ? "#000" : "#fff",
      borderBottom: "7px solid #FFC527",
      borderTop: "none",
    },
    cols: {
      display: "flex",
      flexDirection: "column",
      width: "60%",
      margin: "0 auto",
      textAlign: "center",
    },
    title: {
      fontSize: "36px",
      fontWeight: 700,
    },
    line: {
      width: "40px",
      height: "3px",
      backgroundColor: "#FFC527",
    },
  };
});
export default useStyles;
