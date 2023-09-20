import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      direction="row"
      gap="10px"
      sx={{ alignItems: "center", justifyContent: "center" }}
      flexWrap="wrap"
      p="20px"
    >
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "48px",
          height: "48px",
          margin: "0 20px",
        }}
      />
      <Typography
        variant="h4"
        style={{
          fontWeight: "bold",
          alignItems: "center",
          color: "#ff2625",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Momentum
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
