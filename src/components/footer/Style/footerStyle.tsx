import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    width: "100%",
    borderTop: "1px solid #FFC527",
  },

  inner: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    cursor: "pointer",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 900,

    "&:hover": {
      color: theme.colorScheme === "dark" ? "#FFC527" : "#FFC527",
    },
    "&:active": {
      backgroundColor: "#FFC527",
      color: theme.white,
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
  icon: {
    color: "#FFC527",
  },
}));

export default useStyles;
