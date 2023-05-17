import { ActionIcon, Button } from "@mantine/core";
import React from "react";

type ButtonProps = {
  title: string;
  width: number;
  height: number;
};

const ButtonMain = ({ title, width, height }: ButtonProps) => {
  return (
    <ActionIcon>
      <button
        style={{
          padding: "15px 110px",
          backgroundColor: "#FFC527",
          border: "none",
          cursor: "pointer",
        }}
      >
        {title}
      </button>
    </ActionIcon>
  );
};

export default ButtonMain;
