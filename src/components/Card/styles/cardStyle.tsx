import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    carousel: {
      display: "flex",
      margin: "0 auto",
      textAlign: "center",
      padding: "0 70px",
      height: "400px",
      [theme.fn.largerThan("sm")]: {
        flexWrap: "wrap",
        height: "400px",
      },
    },
    text: {
      fontSize: "16px",
      lineHeight: "27px",
      fontFamily: "Poppins, sans-serif",
      [theme.fn.largerThan("sm")]: {
        fontSize: "15px",
      },
    },
    image: {
      width: "150px",
      borderRadius: "50%",
      marginTop: "15px",
    },
    p: {
      fontWeight: 700,
    },
    link: {
      textDecoration: "none",
      color: "#FFC527",
      fontSize: "15px",
      fontWeight: 700,
    },
    wrap: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
    },
  };
});
export default useStyles;
