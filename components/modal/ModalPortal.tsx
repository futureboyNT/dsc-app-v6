import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '30%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Button onClick={handleClose}>X</Button> */}
          <div style={{background: "#00000080", fontSize: "25px", padding: "5px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <span>Saturday Live Gaesori</span>
            <a onClick={handleClose} style={{color: "white"}}>X</a>
          </div>
          <img src="/poster.png" style={{width: "400px"}}/>
        </Box>
      </Modal>
    </div>
  );
}
