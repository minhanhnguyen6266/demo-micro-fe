'use client'
import { Button } from "@mui/material";

interface ButtonActionProps {
  webName: string;
  buttonName: string
}

const ButtonAction: React.FC<ButtonActionProps> = ({ webName, buttonName }) => {
  const clickOnButton = (webName: string): void => {
    window.open(webName);
  };

  return (
    <Button
      sx={{
        backgroundColor: "#ED4249",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#F06167",
        },
      }}
      variant="outlined"
      onClick={() => clickOnButton(webName)}
    >
      {buttonName}
    </Button>
  );
};

export default ButtonAction;
