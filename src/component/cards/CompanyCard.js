import React from "react";
import {
  BlueTop,
  CardDetails,
  ComCardWrapper,
  CurvedSpan,
  CurvedSpanRight,
  Line,
} from "../../style/main";
import { Apple, Bookmarks } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Chip from "../../asset/chip.png";
import Wifi from "../../asset/wifi.png";
import mastercard from "../../asset/mastercard-2.svg";

function CompanyCard() {
  return (
    <ComCardWrapper>
      <Stack
        sx={{
          padding: { xs: ".5rem", md: "3rem" },
          position: "relative",
        }}
      >
        <CardDetails spacing={8}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
            spacing={2}
          >
            <img src={Chip} alt="chip" width={"40px"} height={"40px"} />
            <img src={Wifi} alt="wifi" width={"40px"} height={"40px"} />
          </Stack>

          <Stack spacing={2}>
            <p>Jonathan Micheal</p>
            <p style={{ fontWeight: "700" }}>****** 3456</p>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            spacing={2}
          >
            <p>09/22</p>
            <img
              src={mastercard}
              alt="mastercard"
              width={"40px"}
              height={"40px"}
            />
          </Stack>
        </CardDetails>

        <BlueTop></BlueTop>
      </Stack>

      <Stack
        spacing={2}
        sx={{
          padding: { xs: "0rem .5rem .5rem .5rem", md: "0rem 3rem 3rem 3rem" },
          mt: "-3rem",
        }}
      >
        {React.Children.toArray(
          data.map((da) => (
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
              spacing={2}
            >
              <p
                style={{
                  color: "#858ca5",
                }}
              >
                {da.name}
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {" "}
                {da.icon && (
                  <spam
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#000",
                      borderRadius: "100%",
                      padding: ".1rem",
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    {da.icon}
                  </spam>
                )}
                <h4>{da.value}</h4>{" "}
              </div>
            </Stack>
          ))
        )}
      </Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <CurvedSpan></CurvedSpan>
        <Line></Line>
        <CurvedSpanRight></CurvedSpanRight>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        spacing={2}
        sx={{ padding: "2rem" }}
      >
        <Stack spacing={1}>
          <p
            style={{
              color: "#858ca5",
            }}
          >
            You have to Pay
          </p>
          <h4>
            549.99{" "}
            <span style={{ color: "#878fa6", fontSize: "12px" }}>USD</span>
          </h4>
        </Stack>

        <Bookmarks sx={{ color: "#c2c7d3" }} />
      </Stack>
    </ComCardWrapper>
  );
}
const data = [
  {
    name: "Comapny",
    value: "Apple",
    icon: <Apple sx={{ color: "#fff", width: "15px" }} />,
  },
  {
    name: "Other Number",
    value: "1266201",
  },
  {
    name: "Product",
    value: "MackBook Air",
  },
  {
    name: "VAT(20%)",
    value: "$100.00",
  },
];
export default CompanyCard;
