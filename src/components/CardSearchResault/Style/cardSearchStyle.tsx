import { createStyles, rem } from "@mantine/core";

const useSearchResStyle = createStyles((theme) => ({
  card: {
    margin: "0  20px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    "@media (max-width: 800px)": {
      margin: "10px  0",
    },
  },

  title: {
    fontSize: 24,
    fontWeight: 700,
  },

  item__right: {
    width: "100%",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },
  cardItem: {
    width: "100%",
    "@media (max-width: 800px)": {
      marginTop: "50px",
    },
  },
  title__item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  discount: {
    color: "green",
  },
  icon__group: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: 5,
    color: "#FFC527",
    fontSize: 18,
  },

  location: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: 10,
    cursor: "pointer",
  },
  map: {
    fontSize: 12,
  },
  services__icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: 20,
  },
  descr: {
    fontSize: 16,
  },
  ball__view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: 10,
    fontSize: 18,
  },
  square: {
    width: "40px",
    height: "25px",
    borderRadius: "5px",
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  item__btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buy__btn: {
    backgroundColor: "#FFC527",
    color: "#000",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.6)",
      border: "1px solid #FFC527",
      color: "#fff",
    },
  },
  view: {},
}));
export default useSearchResStyle;
