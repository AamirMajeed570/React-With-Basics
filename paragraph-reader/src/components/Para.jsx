import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from '../data';
import './Para.css';

export default function Para() {
    const handleTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>This is a paragraph reader</h2>
            <Grid container spacing={2} sx={{ padding: '10px' }}>
                {data.map((element, index) => (
                    <Grid 
                        item 
                        xs={12} 
                        sm={6} 
                        md={4} 
                        key={element.id || index}
                    >
                        <Card
                            sx={{
                                maxWidth: 345,
                                margin: 'auto',
                                border: '2px solid black',
                            }}
                        >
                            <CardMedia
                                sx={{ height: 140 }}
                                image={element.image}
                                title={element.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {element.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {element.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button 
                variant="contained" 
                sx={{ width: '10%', margin: '20px auto', float: 'right' }} 
                onClick={handleTop}
            >
                On Top
            </Button>
        </>
    );
}
