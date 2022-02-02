import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Container,ButtonModal } from "./stylesModal";

interface IModal{

  handleOpenModal?: ({...arg}) => void;
  handlGravar?: ({...arg}) => void;
  btnModal?:string;
  txtModal?: string;
  subTxtModal?:string;
}

const style = {
  display:'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  height:'20rem',

  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  backgroundColor:'#9dbadb',
  border: "0.2rem solid #000000",
  boxShadow: 24,
  fontSize:'1.5rem',
  pt: 2,
  px: 4,
  pb: 3
};

export default function NestedModal(props: IModal) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Button onClick={handleOpen} id="btnModal" >{props.btnModal}</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 450 }}>
          <h2 id="parent-modal-title">{props.txtModal}</h2>
          <p id="parent-modal-description">{props.subTxtModal}</p>
          <ButtonModal>
            <button className="btn" id="btn-cancel" type="button" onClick={handleClose}>Cancelar</button>
            <button className="btn" id="btn-save" type="button" onClick={props.handlGravar}>Gravar</button>
          </ButtonModal>
        </Box>
      </Modal>
    </Container>
  );
}
