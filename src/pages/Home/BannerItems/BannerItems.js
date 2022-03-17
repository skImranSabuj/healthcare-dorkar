import { Chip, Container, Grid, Icon, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faCoffee} />

const BannerItems = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container sx={{p:2 }}>
            <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{py:5}}>
                            <Box>{element}</Box>
                            <Typography sx={{color:'info.main', fontWeight: 600}} variant="h5"  gutterBottom component="div">Opening Oures</Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, expedita.
                            </Typography>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{py:5}}>
                            <Box>{element}</Box>
                            <Typography sx={{color:'info.main', fontWeight: 600}} variant="h5"  gutterBottom component="div">Opening Oures</Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, expedita.
                            </Typography>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{py:5}}>
                            <Box>{element}</Box>
                            <Typography sx={{color:'info.main', fontWeight: 600}} variant="h5"  gutterBottom component="div">Opening Oures</Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, expedita.
                            </Typography>

                        </Paper>
                    </Grid>
            </Grid> 
        </Container>
       
    </Box>
    );
};

export default BannerItems;