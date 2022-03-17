import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';

const Service = (props) => {
    const { name, description, img } = props.service
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow:0 }}>
                <CardMedia
                    component="img"
                    style={{
                        width: 'auto',
                        height: '80px',
                        margin: '0 auto'
                    }}
                    image={img}
                    alt={name}
                />
                <CardContent>

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {description}
                    </Typography>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;