import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    itemsOne: {
      width: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50px",
      position: "fixed",
      marginTop: "50px",
      right: "380px",
      zIndex: 9999,
      transition: "0.3s",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
      backgroundColor: "#000",
      color: "#fff",
    },
    itemsTwo: {
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      marginTop: "50px",
      right: "5px",
      zIndex: 5,
      transition: "0.3s",
      borderBottomLeftRadius: "10px",
      borderTopLeftRadius: "10px",
      backgroundColor: "#000",
      color: "#fff",
    },
  };
});

export default useStyles;
