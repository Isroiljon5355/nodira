import { createStyles } from "@mantine/core";
import bg from "@assets/play.avif";

const useStayles = createStyles(() => {
  return {
    bg: {
      width: "100%",
      height: "100%",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1528255915607-9012fda0f838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80)",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    },
    head: {
      width: "100%",
      height: "60vh",
      //   backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    titleOne: {
      fontSize: 48,
      fontWeight: 700,
      "@media (max-width:576px)": {
        fontSize: 24,
      },
    },
    titleTwo: {
      fontSize: 48,
      fontWeight: 700,
      color: "#FFC527",
      "@media (max-width:576px)": {
        fontSize: 24,
      },
      "@media (max-width:800px)": {
        fontSize: 24,
      },
    },
    line: {
      width: "20%",
      height: "1px",
      backgroundColor: "#FFC527",
    },
    iconItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
      cursor: "pointer",
    },
    icon: {
      fontSize: 48,
      "&:hover": {
        padding: "5px",
        color: "#FFC527",
        border: "2px solid #fff",
        borderRadius: "100%",
      },
    },
  };
});

export default useStayles;
