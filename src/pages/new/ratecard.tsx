// Academic vs Non-academic
// If academic, university
// Choose options (instagram post/reel/story, youtube video, talk, podcast, etc)
// If talk, webinar or in-person (jakarta & non-jakarta)
// Time commitment (talk itself and qna)
// Request rate in either IDR or USD

import type { NextPage } from "next";
import React, { useState } from 'react';
import Footer from "../../components/Footer";
import { Example } from "../../components/CornerNav";
import { motion } from "framer-motion";

import { TextField, Checkbox, MenuItem, Select, FormControl, InputLabel, Grid, Box, Stack, IconButton, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import 'dayjs/locale/en-gb';
import dayjs, { Dayjs } from "dayjs";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface TalkDetails {
    duration: number;
    date: Dayjs;
    location: string;
}

interface PodcastDetails {
    duration: number;
    date: Dayjs;
    location: string;
}

interface ShortsDetails {
    num: number;
    numMedia: number;
}

interface PostDetails {
    num: number;
}

interface StoryDetails {
    num: number;
}

interface YTDetails {
    duration: number;
}

type RequestDetails = TalkDetails | PodcastDetails | ShortsDetails | PostDetails | StoryDetails | YTDetails;

interface Request {
    type: 'Sharing Session' | 'Podcast' | 'Instagram Reel, Tiktok Video, YouTube Shorts' | 'Instagram Post' | 'Instagram Story' | 'YouTube Video' ;
    details: RequestDetails;
}

interface FormData {
    firstName: string;
    lastName: string;
    organization: string;
    organizationType: string;
    organizationWebsite: string;
    organizationSocial: string;
    email: string;
    phone: string;
    currency: string;
    requests: Request[];
    message: string;
}

function DynamicForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        organization: '',
        organizationType: '',
        organizationWebsite: '',
        organizationSocial: '',
        email: '',
        phone: '',
        currency: '',
        requests: [],
        message: '',
    });

    const [newRequestType, setNewRequestType] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const requestLabels = {
        short: 'Short Form Content Post (Instagram Reel, Tiktok Video, YouTube Shorts)',
        long: 'Long Form Content Post (YouTube Video, Podcast Episode)',
    };

    const handleAddRequest = () => {
        let newRequest: Request = { type: newRequestType as Request['type'], details: {} as RequestDetails };
        switch (newRequestType) {
            case 'Sharing Session':
                newRequest.details = { duration: 60, date: dayjs(), location: '' } as TalkDetails;
                break;
            case 'Podcast':
                newRequest.details = { duration: 60, date: dayjs(), location: '' } as PodcastDetails;
                break;
            case 'Instagram Reel, Tiktok Video, YouTube Shorts':
                newRequest.details = { num: 1, numMedia: 1 } as ShortsDetails;
                break;
            case 'Instagram Post':
                newRequest.details = { num: 1 } as PostDetails;
                break;
            case 'Instagram Story':
                newRequest.details = { num: 1 } as StoryDetails;
                break;
            case 'YouTube Video':
                newRequest.details = { duration: 10 } as YTDetails;
                break;
        }
        setFormData({ ...formData, requests: [...formData.requests, newRequest] });
        setNewRequestType('');  // Reset the dropdown
    };

    const handleRemoveRequest = (index: number) => {
        const updatedRequests = formData.requests.filter((_, idx) => idx !== index);
        setFormData({ ...formData, requests: updatedRequests });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const renderRequestDetails = (request: Request, index: number) => {
        if (request.type === 'Sharing Session') {
            return (
                <div>
                    <TextField label="Session Duration" placeholder="1" helperText="in hours, with a minimum of 1 hour" variant="standard" inputProps={{style: {fontSize: '1.25vw'}}} InputLabelProps={{style: {fontSize: '1.25vw'}}} FormHelperTextProps={{style: {fontSize: '1vw'}}} sx={{width: '35vw'}}/>
                    <TextField label="Location" placeholder="Jakarta" helperText="enter 'Online' if session is a webinar" variant="standard" inputProps={{style: {fontSize: '1.25vw'}}} InputLabelProps={{style: {fontSize: '1.25vw'}}} FormHelperTextProps={{style: {fontSize: '1vw'}}} sx={{width: '35vw'}}/>
                    {/* <DatePicker>Duration</DatePicker> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                    {/* <DatePicker label="Date" value={dayjs('2023-08-07')} onChange={(e) => handleInputChange(e)} /> */}
                        <DatePicker label="" slotProps={{ textField: {helperText: 'estimated date of the session'}}} sx={{marginTop: '2vh'}}/>
                    </LocalizationProvider>
                </div>
            );

        } else if (request.type === 'Podcast') {
            return (
                <div>
                    <TextField required label="Podcast Duration" placeholder="30" helperText="in minutes, with a minimum of 30 minutes" variant="standard" inputProps={{style: {fontSize: '1.25vw'}}} InputLabelProps={{style: {fontSize: '1.25vw'}}} FormHelperTextProps={{style: {fontSize: '1vw'}}} sx={{width: '35vw'}}/>
                    <TextField required label="Location" placeholder="Jakarta" helperText="enter 'Online' if podcast will be conducted through a conference call" variant="standard" inputProps={{style: {fontSize: '1.25vw'}}} InputLabelProps={{style: {fontSize: '1.25vw'}}} FormHelperTextProps={{style: {fontSize: '1vw'}}} sx={{width: '35vw'}}/>
                    {/* <DatePicker>Duration</DatePicker> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                    {/* <DatePicker label="Date" value={dayjs('2023-08-07')} onChange={(e) => handleInputChange(e)} /> */}
                        <DatePicker label="" slotProps={{ textField: {helperText: 'estimated date of the podcast'}}} sx={{marginTop: '2vh'}}/>
                    </LocalizationProvider>
                </div>
            );

        } else if (request.type === 'Instagram Reel, Tiktok Video, YouTube Shorts') {
            return (
                <div>
                    <TextField required label="Number of Content" placeholder="1" helperText="example: enter '3' if you'd like me to upload three different videos" variant="standard" inputProps={{style: {fontSize: '1.25vw'}}} InputLabelProps={{style: {fontSize: '1.25vw'}}} FormHelperTextProps={{style: {fontSize: '1vw'}}} sx={{width: '35vw'}}/>
                    <TextField required label="Number of Platforms" placeholder="1" helperText="example: enter '2' if you'd like me to upload on Instagram and Tiktok" variant="standard" inputProps={{style: {fontSize: '1.25vw'}}} InputLabelProps={{style: {fontSize: '1.25vw'}}} FormHelperTextProps={{style: {fontSize: '1vw'}}} sx={{width: '35vw'}}/>
                </div>
            );

        } else if (request.type === 'Instagram Post') {
            return (
                <div>
                    <TextField required label="Number of Content" placeholder="1" helperText="example: enter '3' if you'd like me to upload three different feed posts" variant="standard" inputProps={{style: {fontSize: '1.25vw'}}} InputLabelProps={{style: {fontSize: '1.25vw'}}} FormHelperTextProps={{style: {fontSize: '1vw'}}} sx={{width: '35vw'}}/>
                </div>
            );
        } else if (request.type === 'Instagram Story') {
            return (
                <div>
                    <TextField required label="Number of Content" placeholder="1" helperText="example: enter '3' if you'd like me to upload three different stories" variant="standard" inputProps={{style: {fontSize: '1.25vw'}}} InputLabelProps={{style: {fontSize: '1.25vw'}}} FormHelperTextProps={{style: {fontSize: '1vw'}}} sx={{width: '35vw'}}/>
                </div>
            );
        } else { // 'YouTube Video'
            return (
                <div>
                    <TextField required label="Video Duration" placeholder="15" helperText="in minutes, with a minimum of 10 minutes" variant="standard" inputProps={{style: {fontSize: '1.25vw'}}} InputLabelProps={{style: {fontSize: '1.25vw'}}} FormHelperTextProps={{style: {fontSize: '1vw'}}} sx={{width: '35vw'}}/>
                </div>
            );
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h6" sx={{ fontSize: '2vw', marginTop: '2vh', marginBottom: '0.5vh', marginLeft: '2vw', textDecoration: 'underline'}}>about you.</Typography>
            <div>
                <TextField required label="First Name" name="firstName" placeholder="John" value={formData.firstName} onChange={handleInputChange} variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{ marginBottom: '1vh', marginLeft: '2vw', marginRight: '1vw', width: '20vw' }} />
                <TextField required label="Last Name" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleInputChange} variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{ marginBottom: '1vh', width: '20vw' }} />
            </div>
            <div>
                <TextField required label="Email" name="email" value={formData.email} onChange={handleInputChange} variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{ marginBottom: '1vh', marginLeft: '2vw', marginRight: '1vw', width: '20vw' }}/>
                <TextField required label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{ marginBottom: '1vh', width: '20vw' }} />
            </div>
            <Typography variant="h6" sx={{ fontSize: '2vw', marginTop: '2vh', marginBottom: '0.5vh', marginLeft: '2vw', textDecoration: 'underline'}}>about your organization.</Typography>
            <TextField required label="Name" name="organization" placeholder="Wonka Industries" value={formData.organization} onChange={handleInputChange} variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{  marginBottom: '1vh', marginLeft: '2vw', width: '41vw' }} />
            <div>
                <TextField label="Website" name="organizationWebsite" placeholder="https://www.wonkaindustries.com" value={formData.organizationWebsite} onChange={handleInputChange} variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{ marginBottom: '1vh', marginLeft: '2vw', marginRight: '1vw', width: '20vw' }} />
                <TextField label="Social Media" name="organizationSocial" placeholder="@wonkaindustries" value={formData.organizationSocial} onChange={handleInputChange} variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{ marginBottom: '1vh', width: '20vw' }} />
            </div>
            <div>
                <FormControl required variant="standard" sx={{ marginBottom: '1vh', marginLeft: '2vw', marginRight: '1vw', width: '20vw' }}>
                    <InputLabel sx={{fontSize: '1.4vw'}}>Category</InputLabel>
                    <Select name="organizationType" value={formData.organizationType} sx={{fontSize: '1.4vw'}} onChange={handleInputChange as any}>
                        <MenuItem sx={{fontSize: '1.4vw'}} value="Non-Academic">Non-Academic</MenuItem>
                        <MenuItem sx={{fontSize: '1.4vw'}} value="Academic">Academic</MenuItem>
                    </Select>
                </FormControl>
                <FormControl required variant="standard" sx={{ marginBottom: '1vh', width: '20vw' }}>
                    <InputLabel sx={{fontSize: '1.4vw'}}>Preferred Currency</InputLabel>
                    <Select name="currency" value={formData.currency} sx={{fontSize: '1.4vw'}}  onChange={handleInputChange as any}>
                        <MenuItem sx={{fontSize: '1.4vw'}} value="IDR">IDR</MenuItem>
                        <MenuItem sx={{fontSize: '1.4vw'}} value="USD">USD</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Typography variant="h6" sx={{ fontSize: '2vw', marginTop: '2vh', marginBottom: '0.5vh', marginLeft: '2vw', textDecoration: 'underline'}}>about your request.</Typography>
            <Stack direction="row" alignItems="center">
                <FormControl variant="standard" sx={{ marginBottom: '1vh', marginLeft: '2vw', width: '30vw' }} >
                    <InputLabel sx={{fontSize: '1.4vw'}}>Add Request</InputLabel>
                    <Select value={newRequestType} label="Add Request" sx={{fontSize: '1.4vw'}}  onChange={(e) => setNewRequestType(e.target.value as string)}>
                        <MenuItem sx={{fontSize: '1.2vw'}} value="Sharing Session">Sharing Session</MenuItem>
                        <MenuItem sx={{fontSize: '1.2vw'}} value="Podcast">Podcast</MenuItem>
                        <MenuItem sx={{fontSize: '1.2vw'}} value="Instagram Reel, Tiktok Video, YouTube Shorts">Instagram Reel, Tiktok Video, YouTube Shorts</MenuItem>
                        <MenuItem sx={{fontSize: '1.2vw'}} value="Instagram Post">Instagram Post</MenuItem>
                        <MenuItem sx={{fontSize: '1.2vw'}} value="Instagram Story">Instagram Story</MenuItem>
                        <MenuItem sx={{fontSize: '1.2vw'}} value="YouTube Video">YouTube Video</MenuItem>
                    </Select>
                </FormControl>
                <IconButton onClick={handleAddRequest} size="small" color="secondary" style={{}} disabled={!newRequestType} >
                    <AddCircleIcon />
                </IconButton>
                {/* <Button onClick={handleAddRequest} variant="contained" color="primary" disabled={!newRequestType}>Add Request</Button> */}
            </Stack>
            {formData.requests.map((request, index) => (
                <Accordion key={index} defaultExpanded sx={{ width: '41vw', marginLeft: '2vw', marginBottom: '1vh', '&.Mui-expanded': { marginLeft : '2vw' }}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{height: '5vh'}}>
                        <Box flexGrow={1} display="flex" alignItems="center" justifyContent="space-between" >
                            <Typography sx={{fontSize: '1.3vw', fontWeight: 'medium'}}>{request.type}</Typography>
                            <IconButton onClick={() => handleRemoveRequest(index)} size="small" color="error" sx={{}}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        {renderRequestDetails(request, index)}
                        {/* <Box display="flex" flexDirection="column" alignItems="flex-start">
                            {Object.entries(request.details).map(([key, value]) => (
                                <TextField
                                    key={key}
                                    label={key.replace(/([A-Z])/g, ' $1').trim()} // Add space before capital letters
                                    value={value}
                                    onChange={(e) => handleInputChange(e)}
                                    margin="normal"
                                    fullWidth
                                />
                            ))}
                        </Box> */}
                    </AccordionDetails>
                </Accordion>
            ))}
            
            <TextField required label="Description" multiline rows={4} name="message" placeholder="Please give a short description of your request!" value={formData.message} onChange={handleInputChange} variant="standard" inputProps={{style: {fontSize: '1.4vw'}}} InputLabelProps={{style: {fontSize: '1.4vw'}}} sx={{  marginBottom: '1vh', marginLeft: '2vw', width: '41vw' }}/>
            <Stack direction="row" alignItems="center">
                <Checkbox checked={isChecked} onChange={handleCheckboxChange} inputProps={{ 'aria-label': 'controlled' }} sx={{ marginTop: '2vh', marginLeft: '2vw'}}></Checkbox>
                <Typography variant="subtitle2" sx={{ fontSize: '1vw', marginTop: '2vh', textDecoration: 'underline'}}>I verify to my best knowledge that the information entered is correct. </Typography>
            </Stack>
            
            
            {isChecked ? (
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
                    type="submit"
                    >
                    Submit
                </button>
            ) : (
                <button
                    disabled
                    style={{marginLeft: '3vw', marginTop: '3vh', marginBottom: '2vh', width: '39vw', textAlign: 'center', display: 'inline-block', fontSize: '1.4vw'}}
                    className={`
                        relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
                        border-neutral-300 px-4 py-1.5 font-medium
                        text-neutral-500 transition-all duration-300
                        active:scale-100`}
                    type="submit"
                    >
                    Submit
                </button>
            )}
            
        </form>
    );
}


const containerStyle = {
    padding: '0 15vw 0 15vw'
  };

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
                                My Rate Card 👀
                            </Typography>
                        </div>
                        <div style={{marginTop: '2vh'}}>
                            <Typography variant="subtitle2" fontSize="1.4vw" gutterBottom>
                                If you&apos;re interested in collaborating with me, please fill out the rate card request form. I&apos;ll reach out as soon as possible!
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <DynamicForm></DynamicForm>
                        
                    </Grid>
                </Grid>
            </div>
            <Footer></Footer>
        </div>
        

    );
};

export default Home;