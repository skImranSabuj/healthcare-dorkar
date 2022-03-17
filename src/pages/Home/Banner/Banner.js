import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';


const verticalCenter={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    border: '1px solid black'
}
const Banner = () => {
    const AppointmentBannerBg={
        // backgroundColor: 'rgba(45,58,74, .80)',
        backgroundImage: `url(${bg})`,
        marginTop: '50px',
        backgroundBlendMode: 'darken, luminosity'
        }
    return (
        <Box container sx={{flexGrow: 1 }} >
        <Grid container style={AppointmentBannerBg} spacing={2}>
          
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'left'
          }}>
            <Box>
              <Typography variant="h3" sx={{my:2, fontWeight: 600}}> Your Smile <br/> Starts Here </Typography>
              <Typography variant="h6" color="gray" sx={{my:2, fontWeight: 300}}> It it am matter of fact thet yo are reading tghis. It it am matter of fact thet yo are reading</Typography>
            <Button variant="contained" style={{backgroundColor:'#51DCEA'}}  sx={{mt:2}}>Get Appointment</Button>
            </Box>
          </Grid>
          <Grid style={verticalCenter} item xs={12} md={6}>
            <img style={{
              width:400,
            //   marginTop: '-115px'
            }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Banner;