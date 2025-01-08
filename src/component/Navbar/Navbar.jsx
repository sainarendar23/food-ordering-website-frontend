import { Avatar, Badge, Box, IconButton, responsiveFontSizes } from '@mui/material'
import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';
import { Person,  } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Navbar = () =>{
    const navigate=useNavigate()
  return (
    <Box 
    className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 
    flex justify-between">        
        <div className='lg:mr-10 cursor-pointer flex 
        item-center space-x-4'>
            <li className='logo font-semibold text-grey-300 
            text-2xl'>Tasty foods</li>
        </div>  
        <div className='flex items-center space-x-2 lg:spac-x-10'>
            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>
            <div className=''>
                {false ? <Avatar sx={{bgcolor:"white", color: pink.A400}}>
                S </Avatar>:
                <IconButton onClick={()=>navigate("/my-profile")}>
                    <Person/>
                </IconButton>}
            </div>
            <div className=''>
            <IconButton>
                <Badge color="secendory" badgeContent={3}>
            <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                </Badge>
                </IconButton>
            </div>
        </div>
    </Box>
  )
}

