import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import HomeIcon from '@mui/icons-material/Home';
import AddressCard from './AddressCard';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Formik,Form } from 'formik';
import { TextFields } from '@mui/icons-material';
//import * as Yup from "yup"

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline:"none",
    boxShadow: 24,
    p: 4,
  };

  const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:"",
  }

//   const validationSchema =Yup.object.shape({
//     streetAddress:Yup.string().required("Street is required"),
//     state:Yup.required("State is required"),
//     pincode:Yup.string().required("pincode is required")
//   })


const items = [1, 1];
const Cart = () => {
    const createOrderUsingSelectedAddress = () => {};
    const handleOpenAddressModal = () => setOpen(true) ;
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const handleSubmit = (value)=>{
        console.log("form value",value)
    };
    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen py-10'>

                    {items.map((item) => (<CartItem />))}
                    <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>$599</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Delivery Fee</p>
                                <p>$5</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Platform Fee</p>
                                <p>$50</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>GST and Restauant charges</p>
                                <p>$25</p>
                            </div>
                        </div>
                        <Divider />
                        <div className='flex justify-between text-gray-400'>
                            <p>Total Pay</p>
                            <p>$120</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-self-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>
                            choose delivery address
                        </h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1, 1, 1].map((item) => (<AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}
                            />))}
                            <Card className="flex gap-5 w-64 p-5">
                                <AddLocationAltIcon />
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg text-white'>add new address </h1>
                                    <Button varient="outlined"
                                     fullWidth 
                                     onClick={handleOpenAddressModal}
                                     >
                                        ADD
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
  <Box sx={style}>
    <Formik initialValues={initialValues}
//validationSchema={validationSchema}
    onSubmit={handleSubmit}>
{()=>(
    <Form>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Field 
                as={TextField}
                name="streetAddress"
                label="Street Address"
                fullWidth
                varient="outlined"
                // error = {!ErrorMessage("streetAddress")}
                // helperText={
                //     <ErrorMessage>
                //         {(msg)=><span className='text-red-600'>{msg}</span>}
                //     </ErrorMessage>
                // }
                />
            </Grid>
            <Grid item xs={12}>
                <Field 
                as={TextField}
                name="state"
                label="State"
                fullWidth
                varient="outlined"
                // error = {!ErrorMessage("streetAddress")}
                // helperText={
                //     <ErrorMessage>
                //         {(msg)=><span className='text-red-600'>{msg}</span>}
                //     </ErrorMessage>
                // }
                />
            </Grid>
            <Grid item xs={12}>
                <Field 
                as={TextField}
                name="city"
                label="city"
                fullWidth
                varient="outlined"
                // error = {!ErrorMessage("streetAddress")}
                // helperText={
                //     <ErrorMessage>
                //         {(msg)=><span className='text-red-600'>{msg}</span>}
                //     </ErrorMessage>
                // }
                />
            </Grid>
            <Grid item xs={12}>
                <Field 
                as={TextField}
                name="pincode"
                label="pincode"
                fullWidth
                varient="outlined"
                // error = {!ErrorMessage("streetAddress")}
                // helperText={
                //     <ErrorMessage>
                //         {(msg)=><span className='text-red-600'>{msg}</span>}
                //     </ErrorMessage>
                // }
                />
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth variant='contained' type='submit' 
                color='primary'>Deliver Here</Button>
            </Grid>
        </Grid>
        </Form>
    )}
    </Formik>
  </Box>
</Modal>
        </>
    );
}

export default Cart