import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  grid: {
    width: "100%",
  },
  root: {
    backgroundColor: "#F6F8F9",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // paddingTop: theme.spacing.xl * 3,
    // paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
    paddingTop: "30px",
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    // paddingTop: theme.spacing.xl * 2,
    // paddingBottom: theme.spacing.xl * 2,
    // marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
    color: "#000",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    maxWidth: 500,
    fontSize: 24,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: 24,
      lineHeight: 1.15,
    },
  },

  descrOne: {
    fontSize: "12px",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  textItems: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    fontSize: "12px",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5px",
  },
  check: {
    backgroundColor: "#fff",
    color: "#FFC527",
  },
  descrSeven: {
    fontSize: "12px",
  },
  itemFlex: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
    "@media (max-width: 755px)": {
      flexDirection: "column",
    },
  },

  item: {
    width: "250px",
    height: "200px",
    paddingTop: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    flexWrap: "wrap",
    gap: "25px",
    cursor: "pointer",
    borderBottom: "3px solid rgba(0,0,0,0.5)",
    "&:hover": {
      fontWeight: 900,
      color: "#FFC527",
      borderBottom: "3px solid #FFC527",
    },
  },
  linkActive: {
    color: "#FFC527",
    fontWeight: 900,
    borderBottom: "3px solid #FFC527",
  },

  icon: {
    fontSize: "56px",
    padding: "10px",
    border: "2px solid #FFC527",
    borderRadius: "100%",
  },

  cartImage: {
    width: "450px",
    height: "350px",
    border: "10px solid #fff",
    marginTop: "5%",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "@media (max-width: 755px)": {
      width: "340px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));
export default useStyles;
