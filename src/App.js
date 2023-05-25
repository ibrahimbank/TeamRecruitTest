import { Modal, Stack } from "@mui/material";
import "./App.css";
import {
  Body,
  Button,
  CardInfo,
  CardInput,
  ModalStyle,
  Span,
  Wrapper,
} from "./style/main";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import Header from "./component/Header";
import AtmCardDetails from "./component/AtmCardDetails";
import CompanyCard from "./component/cards/CompanyCard";

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Body>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Click to Make Payment
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalStyle>
          <Stack spacing={2} sx={{ p: "4rem 0rem" }}>
            <Wrapper direction={{ xs: "column", lg: "row" }} spacing={4}>
              <CardInput>
                <Header />
                <AtmCardDetails />
              </CardInput>

              <CardInfo>
                <CompanyCard />
              </CardInfo>
            </Wrapper>
          </Stack>
          <Span
            onClick={() => {
              handleClose();
            }}
          >
            <Close sx={{ color: "#202427" }} />
          </Span>
        </ModalStyle>
      </Modal>
    </Body>
  );
}

export default App;
