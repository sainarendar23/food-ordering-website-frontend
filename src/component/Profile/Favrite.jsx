import React from 'react';
import { Card, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { pink } from '@mui/material/colors';

const favoriteRestaurants = [
    {
        name: "Absolute Barbeque",
        description: "Delicious food with a great ambiance.",
        imageUrl: "https://media.istockphoto.com/id/1248298343/photo/3d-rendering-of-a-luxury-restaurant-interior-at-night.webp?b=1&s=612x612&w=0&k=20&c=C9agnxCgdUw6qJ1XgnIhNkhMtngAAlT6gtZr2p1fRes="
    },
    {
        name: " Amaze Foods ",
        description: "Amazing dishes and excellent service.",
        imageUrl: "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
    }
];

const Favrite = () => {
    return (
        <div className='px-5 lg:px-20'>
            <h1 className='text-xl font-semibold py-5'>My Favorites</h1>
            <div className='space-y-5'>
                {favoriteRestaurants.map((restaurant, index) => (
                    <Card key={index} className='flex items-center p-5'>
                        <img
                            className='h-16 w-16 rounded-md'
                            src={restaurant.imageUrl}
                            alt={restaurant.name}
                        />
                        <div className='ml-5'>
                            <h2 className='font-semibold'>{restaurant.name}</h2>
                            <p>{restaurant.description}</p>
                        </div>
                        <IconButton sx={{ ml: 'auto', color: pink[500] }}>
                            <FavoriteIcon />
                        </IconButton>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Favrite;
