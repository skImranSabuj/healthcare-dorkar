import { Container, Grid,Paper,Box, Typography, Button} from '@mui/material';
import React from 'react';
import { green,grey } from '@mui/material/colors';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { dark } from '@mui/material/styles/createPalette';
// import Paper from '@mui/material/Paper';


const textgreen = green[500];
const textgrey = grey[500];

const AppointmentBanner = () => {
  const AppointmentBannerBg={
    backgroundColor: 'rgba(45,58,74, .80)',
    backgroundImage: `url(${bg})`,
    marginTop: '50px',
    backgroundBlendMode: 'darken, luminosity'
    }
    return (
        <Box sx={{flexGrow: 1 }} >
          <Grid container style={AppointmentBannerBg} spacing={2}>
            <Grid item xs={12} md={6}>
              <img style={{
                width:400,
                marginTop: '-115px'
              }} src={doctor} alt="" />
            </Grid>
            <Grid item xs={12} md={6} sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'left'
            }}>
              <Box>
                <Typography variant="h6" color="#51DCEA"> Appoinment </Typography>
                <Typography variant="h4" color="white" sx={{my:2}}> Make an appointment toiday </Typography>
                <Typography variant="h6" color="white"> It it am matter of fact thet yo are reading tghis. It it am matter of fact thet yo are reading</Typography>
              <Button variant="contained" style={{backgroundColor:'#51DCEA'}}  sx={{mt:2}}>Learn More</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
    );
};

export default AppointmentBanner;