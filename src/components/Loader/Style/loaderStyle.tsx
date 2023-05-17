import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => {
  return {
    styleContainer: {
      position: "relative",
      width: "100%",
      height: "100vh",
    },
    styleSpen: {
      display: "block",
      width: 50,
      height: 50,
      border: "7px solid #eee",
      borderTop: "7px solid #2D3134",
      borderRadius: "50%",
      boxSizing: "border-box",
      position: "absolute",
      top: 0,
      left: 0,
    },
    spinTransition: {
      repeat: Infinity,
      ease: "easeInOut",
      // width: ['100%', '50%'],
      duration: 1,
    },
  };
});
export default useStyles;
