import { Card, Chip, IconButton } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  const isOpen = true; // Replace with actual state or prop

  return (
    <Card className='m-5 w-[18rem]'>
      <div className={`${isOpen ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
        <img 
          className='w-full h-[10rem] rounded-t-md object-cover' 
          src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_640.jpg" 
          alt="Restaurant"
        />
        <Chip 
          size="small" 
          className="absolute top-2 left-2" 
          color={isOpen ? "success" : "error"}
          label={isOpen ? "Open" : "Closed"}
        />
      </div>
      <div className='p-4 textpart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>Indian</p>
          <p className='text-gray-50 text-sm'>Description</p>
        </div>
        <div>
          <IconButton>
            {isOpen ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
