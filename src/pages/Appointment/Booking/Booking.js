import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date}) => {
    const {name,time,space}=booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const  handleModalOpen= () => setOpenBooking(true);
    const handleModalClose = () => setOpenBooking(false);
    return (
       <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{color:'info.main', fontWeight: 600}} variant="h5"  gutterBottom component="div">{name}</Typography>
                <Typography variant="h6"  gutterBottom component="div">{time}</Typography>
                <Typography variant="caption" display="block" gutterBottom>
                {space} space available
                </Typography>
                <Button onClick={handleModalOpen} variant="contained">Book Appointment</Button>
            </Paper>
        </Grid>
        <BookingModal 
            openBooking={openBooking}
            handleModalClose={handleModalClose}
            booking={booking}
            date={date}
        ></BookingModal>
       </>
    );
};

export default Booking;