import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    root: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    dropdown: {
      position: "absolute",
      top: 60,
      left: 0,
      right: 0,
      zIndex: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopWidth: 0,
      overflow: "hidden",
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },

    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      [theme.fn.largerThan("sm")]: {
        padding: "0 50px",
      },
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
    },

    links: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    burger: {
      [theme.fn.largerThan("sm")]: {
        justifyContent: "space-between",
        display: "none",
      },
    },

    link: {
      display: "block",
      lineHeight: 1,
      padding: "8px 8px",
      borderRadius: theme.radius.sm,
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,

      [theme.fn.smallerThan("sm")]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },

    linkActive: {
      color: "#FFC527",
      transition: "0.3s",
      fontSize: 18,
      borderBottom: "1px solid #FFC527",
    },

    btnBuoking: {
      padding: "5px 25px",
      backgroundColor:
        theme.colorScheme === "dark" ? "rgba(0,0,0,0.5)" : "#FFC527",
      border: "1px solid #FFC527",
      "&:hover": {
        backgroundColor: "#FFC527",
      },
    },
  };
});
export default useStyles;
