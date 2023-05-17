import { createStyles } from "@mantine/core";

const useServiseRentStyle = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontSize: 14,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
  box: {
    width: "80%",
    margin: "0 auto",
    "@media (max-width:576px)": {
      width: "95%",
    },
  },
  readMore: {
    backgroundColor: "#FFC527",
    color: "#000",
  },
}));

export default useServiseRentStyle;
