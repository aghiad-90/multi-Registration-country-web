import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CoreButton from "../button/index.tsx";
import "./style.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CoreModal(props: any) {
  const {
    modalOpen,
    setModalOpen,
    primaryLabel,
    primaryAction,
    secondaryLabel,
    secondaryAction,
    description,
  } = props;

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {description}
          </Typography>
          {primaryLabel && (
            <div className="button">
              <CoreButton label={primaryLabel} onClick={primaryAction} />
            </div>
          )}
          {secondaryLabel && (
            <div className="button">
              <CoreButton label={secondaryLabel} onClick={secondaryAction} />
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
