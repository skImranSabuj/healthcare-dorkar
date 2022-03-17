import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import loginImg from '../../images/login.png'

const Login = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            
        <Container sx={{p:2 }}>
            <Grid container spacing={2}>
                    <Grid item xs={12} md={6}></Grid>
                    <Grid item xs={12} md={6}>
<img style={{width:'100%'}} src={loginImg} alt="" />
                    </Grid>
            </Grid>
        </Container>
        </Box>
    );
};

export default Login;