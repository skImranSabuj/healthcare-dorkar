import { FormGroup } from '@mui/material';
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking,handleModalClose,booking,date}) => {
  const {name,time}=booking;
  const handleBookingSubmit=(e)=>{
  alert('Submitting');
  handleModalClose();
  e.preventDefault();
  }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography sx={{textAlign:'center'}} id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
           <form onSubmit={handleBookingSubmit}>
           <TextField
              disabled
              id="outlined-size-small"
              defaultValue={time}
              size="small"
              sx={{width:'90%', m:1}}
            />
            <TextField
              id="outlined-size-small"
              defaultValue="Your Name"
              size="small"
              sx={{width:'90%', m:1}}
            />
            <TextField
              id="outlined-size-small"
              defaultValue="Your Email"
              size="small"
              sx={{width:'90%', m:1}}
            />
            <TextField
              id="outlined-size-small"
              defaultValue="Your Phone"
              size="small"
              sx={{width:'90%', m:1}}
            />
            <TextField
              disabled
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
              sx={{width:'90%', m:1}}
            />
            <Button type="submit" variant="contained"  sx={{m:1, width:'90%'}}>Submit</Button>
           </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;