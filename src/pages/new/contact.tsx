// TODO: Contact Form - Pick whatsapp (whatsapp for business) or email 

import type { NextPage } from "next";
import * as React from 'react';
import { Typography, Grid, TextField, Box, MenuItem } from "@mui/material";
import Footer from "../../components/Footer";
// import Example from "../../components/NavigationBar";
import { Example } from "../../components/CornerNav";
import { motion } from "framer-motion";


const containerStyle = {
    padding: '0 15vw 0 15vw'
  };

const fieldPaddings = {
    y: '1vh'
}

const options = [
    
    {
        value: 'General Inquiries',
        label: 'General Inquiries',
    },
    {
        value: 'Business Inquiries',
        label: 'Business Inquiries',
    },
    {
        value: 'Academic Inquiries',
        label: 'Academic Inquiries',
    },
    {
        value: 'Content Suggestions',
        label: 'Content Suggestions',
    },
    {
        value: 'Feedback',
        label: 'Feedback',
    },
    {
        value: 'Other',
        label: 'Other',
    }
  ];


const Home: NextPage = () => {
    return (
        <div className='flex flex-col justify-center'>
            <div style={{paddingBottom: '15vh'}}>
                <Example></Example>
            </div>
            
            <div style={containerStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div style={{marginTop: '2.5vh'}}>
                            <Typography variant="h5" textAlign="left" fontSize="2vw">
                                Connect with me 🥹
                            </Typography>
                        </div>
                        <div style={{marginTop: '2vh'}}>
                            <Typography variant="subtitle2" fontSize="1.4vw" gutterBottom>
                                I'd love to hear from you! If you have any questions, concerns, inputs, or just wanna say hi, feel free to reach out to me by submitting the form. I'll get back to you as soon as I can!
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div>
                                <TextField required id="First Name" label="First Name" placeholder="John" variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{ marginBottom: '1vh', marginLeft: '2vw', marginRight: '1vw', width: '20vw' }}/>
                                <TextField required id="Last Name" label="Last Name" placeholder="Doe" variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{ marginBottom: '1vh', width: '20vw' }}/>
                            </div>
                            <div>
                                <TextField required id="Email" label="Email" placeholder="johndoe@mail.com" variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{  marginY: '1vh', marginLeft: '2vw', width: '41vw' }}/>
                            </div>
                            <div>
                                <TextField required id="Phone" label="Phone Number" placeholder="08123456789" variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{  marginY: '1vh', marginLeft: '2vw', width: '41vw' }}/>
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="Subject"
                                    select
                                    label="Subject"
                                    variant="standard"
                                    inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}}
                                    sx={{  marginY: '1vh', marginLeft: '2vw', width: '41vw' }}
                                    >
                                    {options.map((option) => (
                                        <MenuItem key={option.value} value={option.value} sx={{fontSize:'1.4vw'}}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div>
                                <TextField id="Specify" label="Please specify!" placeholder="" variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{  marginY: '1vh', marginLeft: '2vw', width: '41vw', fontSize: '1vw' }}/>
                            </div>
                            <div>
                                <TextField required id="Message" label="Message" multiline rows={4} placeholder="Write your message here!" variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{  marginY: '1vh', marginLeft: '2vw', width: '41vw' }}/>
                            </div>
                        </Box>
                        <button
                            style={{marginLeft: '3vw', marginTop: '3vh', marginBottom: '2vh', width: '39vw', textAlign: 'center', display: 'inline-block', fontSize: '1.4vw'}}
                            className={`
                                relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
                                border-neutral-700 px-4 py-1.5 font-medium
                                text-neutral-700 transition-all duration-300
                                
                                before:absolute before:inset-0
                                before:-z-10 before:translate-y-[200%]
                                before:scale-[2.5]
                                before:rounded-[100%] before:bg-indigo-500
                                before:transition-transform before:duration-1000
                                before:content-[""]
                        
                                hover:scale-105 hover:border-neutral-50 hover:text-neutral-50
                                hover:before:translate-y-[0%]
                                active:scale-100`}
                            >
                            Submit
                        </button>
                    </Grid>
                </Grid>
            </div>
            <Footer></Footer>
        </div>
        

    );
};

export default Home;