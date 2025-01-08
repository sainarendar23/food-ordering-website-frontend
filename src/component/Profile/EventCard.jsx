import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia 
          sx={{ height: 345 }}
          image='https://cdn.pixabay.com/photo/2019/08/19/11/52/burger-4416178_1280.jpg'
        />
        <CardContent>
          <Typography variant='h5'>
            Indian fast food
          </Typography>
          <Typography variant='body2'>
            50% off on your first meal
          </Typography>
          <div className='py-2 space-y-2'>
            <p>mumbai</p>
            <p className='text-5m text-blue-500'>February 14, 2024 12:00 AM</p>
            <p className='text-5m text-red-500'>February 15, 2024 12:00 AM</p>
          </div>
        </CardContent>
        {true && (
          <CardActions>
            <Button>
              <DeleteIcon />
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
