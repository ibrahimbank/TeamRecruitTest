import React from "react";
import {
  ColonWrapper,
  LogoText1,
  LogoText2,
  LogoWrapper,
  TimeWrapper,
} from "../style/main";
import { Stack, Typography } from "@mui/material";

import { CreditCard, MoreVert } from "@mui/icons-material";

function Header() {
  return (
    <Stack spacing={8} sx={{ mb: "2rem" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        width={"100%"}
        spacing={4}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <LogoWrapper>
            <CreditCard sx={{ color: "#fff" }} />
          </LogoWrapper>

          <Typography variant="h1" sx={{ fontSize: "18px" }}>
            <LogoText1>AceCoin</LogoText1>
            <LogoText2>Pay</LogoText2>
          </Typography>
        </Stack>

        <Stack direction={"row"} spacing={0.5}>
          <TimeWrapper>
            <Typography variant="p">0</Typography>
          </TimeWrapper>
          <TimeWrapper>
            <Typography variant="p">4</Typography>
          </TimeWrapper>
          <ColonWrapper>
            <MoreVert />
          </ColonWrapper>
          <TimeWrapper>
            <Typography variant="p">2</Typography>
          </TimeWrapper>
          <TimeWrapper>
            <Typography variant="p">1</Typography>
          </TimeWrapper>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;
