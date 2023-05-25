import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
} from "@mui/material";
import React from "react";
import {
  Button,
  ColonWrapper,
  EditText,
  Form,
  FormControlW,
  TypographyDesc,
  TypographyHeader,
} from "../style/main";
import masterCard from "../asset/mastercard.png";
import { Apps, Edit, Verified } from "@mui/icons-material";

function AtmCardDetails() {
  return (
    <Form spacing={6}>
      <Stack spacing={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          spacing={2}
        >
          <Stack spacing={1}>
            <TypographyHeader
              variant="h4"
              sx={{ fontSize: "16px !important", fontWeight: 700 }}
            >
              Card Number
            </TypographyHeader>
            <TypographyDesc
              variant="p"
              sx={{
                color: "#7c7c7c",
              }}
            >
              Enter the 16-digit card number on the card
            </TypographyDesc>
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            sx={{ cursor: "pointer" }}
          >
            <Edit sx={{ color: "#4d88fa" }} />
            <EditText>Edit</EditText>
          </Stack>
        </Stack>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            sx={{
              borderRadius: "8px",
              background: "#fafafc",
            }}
            id="filled-adornment-amount"
            placeholder="2412 - 7512 - 3412 - 3566"
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={masterCard}
                  alt="mastercard"
                  width={"30px"}
                  height={"20px"}
                />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <Verified sx={{ color: "#01a0f1" }} />
              </InputAdornment>
            }
          />
        </FormControl>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        width={"100%"}
        spacing={2}
      >
        <Stack spacing={1}>
          <TypographyHeader variant="h4" sx={{}}>
            CVV Number
          </TypographyHeader>
          <TypographyDesc variant="p" sx={{}}>
            Enter the 3 or 4 digit number on the card
          </TypographyDesc>
        </Stack>
        <FormControlW variant="outlined">
          <OutlinedInput
            sx={{
              borderRadius: "8px",
              background: "#fafafc",
            }}
            id="filled-adornment-amount"
            placeholder="327"
            endAdornment={
              <InputAdornment position="end">
                <Apps sx={{ color: "#9fa5b9" }} />
              </InputAdornment>
            }
          />
        </FormControlW>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        width={"100%"}
        spacing={2}
      >
        <Stack spacing={1}>
          <TypographyHeader variant="h4">Expiry Date</TypographyHeader>
          <TypographyDesc variant="p">
            Enter the expiration date of the card
          </TypographyDesc>
        </Stack>
        <Stack
          direction={"row"}
          width={{ xs: "100%", lg: "350px" }}
          spacing={1}
          justifyContent={"flex-end"}
        >
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              sx={{
                borderRadius: "8px",
                background: "#fafafc",
              }}
              id="filled-adornment-amount"
              placeholder="09"
            />
          </FormControl>
          <ColonWrapper>
            <h4 style={{ fontSize: "18px", fontWeight: 700 }}>/</h4>
          </ColonWrapper>
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              sx={{
                borderRadius: "8px",
                background: "#fafafc",
              }}
              id="filled-adornment-amount"
              placeholder="22"
            />
          </FormControl>
        </Stack>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        width={"100%"}
        spacing={2}
      >
        <Stack spacing={1}>
          <TypographyHeader variant="h4" sx={{}}>
            Password
          </TypographyHeader>
          <TypographyDesc variant="p" sx={{}}>
            Enter your Dynamic password
          </TypographyDesc>
        </Stack>
        <FormControlW variant="outlined">
          <OutlinedInput
            sx={{
              borderRadius: "8px",
              background: "#fafafc",
            }}
            type="password"
            id="filled-adornment-amount"
            placeholder="***********"
            endAdornment={
              <InputAdornment position="end">
                <Apps sx={{ color: "#9fa5b9" }} />
              </InputAdornment>
            }
          />
        </FormControlW>
      </Stack>

      <Button sx={{ height: "55px" }}>Pay Now</Button>
    </Form>
  );
}

export default AtmCardDetails;
