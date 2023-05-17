import DarkMode from "@components/darkMode/DarkLightMode";
import { useState } from "react";
import { Drawer, NativeSelect, Box, createStyles } from "@mantine/core";
import { FiSettings } from "react-icons/fi";
import useStyles from "./Style/darkModeStyle";

const DarkmodeLocale = () => {
  const [open, setOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <div>
      <Drawer
        opened={open}
        onClose={() => setOpen(false)}
        title="Settings"
        padding="xl"
        size="sm"
        position="right"
      >
        <DarkMode />
        <NativeSelect
          data={["English", "Uzbek"]}
          rightSectionWidth={40}
          style={{ width: "100%", marginTop: "20px" }}
        />
      </Drawer>
      {open ? (
        <Box onClick={() => setOpen(false)} className={classes.itemsOne}>
          <FiSettings size={24} />
        </Box>
      ) : (
        <Box onClick={() => setOpen(true)} className={classes.itemsTwo}>
          <FiSettings size={24} />
        </Box>
      )}
    </div>
  );
};

export default DarkmodeLocale;
