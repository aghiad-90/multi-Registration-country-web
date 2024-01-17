import * as React from "react";
import { Button as BaseButton } from "@mui/base/Button";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import { useTheme } from "styled-components";

export default function CoreButton(props) {
  const { label = "", disabled = false, onClick } = props;
  const theme = useTheme();
  const primary = theme.colors.primary;

  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={onClick}
        style={{ backgroundColor: primary }}
        disabled={disabled}
      >
        {label}
      </Button>
    </Stack>
  );
}

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
    transform: scale(0.99);
  }
`
);
