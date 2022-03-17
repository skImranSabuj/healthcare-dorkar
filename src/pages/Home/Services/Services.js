import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';



const Services = () => {
    const services = [
        {
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
            img: whitening
        }
    ]
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container sx={{p:2 }}>
                    <Typography sx={{m:2,fontWeight: 500,color: 'success.main' }} variant="h5" component="div">
                            OUR SERVICES
                        </Typography>
                    <Typography sx={{ fontWeight: 600, m:2 }}  variant="h4" component="div">
                            OUR SERVICES
                        </Typography>
                    <Grid container spacing={{ xs: 2, md: 3, p:2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service, index) => (
                            <Service key={service.name}
                                service={service}
                            ></Service>
                        ))}
                    </Grid>
                </Container>
               
            </Box>
        </div>
    );
};

export default Services;