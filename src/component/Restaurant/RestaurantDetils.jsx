import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Accordion, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';

const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"]
  },
  {
    category: "Protein",
    ingredients: ["Carrot"]
  },
];

const MenuCard = () => {
  const handleCheckBoxChange = () => {
    console.log("value");
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className='lg:flex items-center justify-between'>
          <div className='lg:flex item-center lg:gap-5'>
            <img 
              className='w-[7rem] h-[7rem] object-cover'
              src="https://cdn.pixabay.com/photo/2024/02/06/10/53/ai-generated-8556731_1280.jpg" 
              alt="" 
            />
            <div className='space-y-1 lg:space-y-5 lg:max-w-2'>
              <p className='font-semibold text-xl'>Burger</p>
              <p className='text-gray-400 '>"good"</p>
              <p>₹499</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className='flex gap-5 flex-wrap'>
            {
              demo.map((item) => (
                <div key={item.category}> 
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredients.map((ingredient) => (
                      <FormControlLabel 
                        key={ingredient}
                        control={<Checkbox onChange={handleCheckBoxChange} />}
                        label={ingredient}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))
            }
          </div>
          <Button variant='contained' endIcon={<PlayCircle />} sx={{ mt: 2 }}>Add to cart</Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
