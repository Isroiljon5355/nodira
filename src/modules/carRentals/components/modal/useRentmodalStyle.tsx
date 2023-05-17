import { createStyles } from "@mantine/core";

const useRentmodalStyle = createStyles((theme) => {
  return {
    text__icon: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    submitBtn: {
      background: "#FFC527",
      color: "#000",
    },
  };
});
export default useRentmodalStyle;
