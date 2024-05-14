import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box, IconButton, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface InstagramPostDetails {
    numberOfPosts: number;
}

interface TalkDetails {
    mode: 'Online' | 'In person';
    duration: number;
    date: string;
    location: string;
}

interface YouTubeVideoDetails {
    duration: number;  // Example detail
}

interface BlogPostDetails {
    // Additional specific details can be defined here
}

type RequestDetails = InstagramPostDetails | TalkDetails | YouTubeVideoDetails | BlogPostDetails;

interface Request {
    type: 'Instagram Post' | 'Talk' | 'YouTube Video' | 'Blog Post';
    details: RequestDetails;
}

interface FormData {
    name: string;
    contact: string;
    currency: string;
    requests: Request[];
}

function DynamicForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        contact: '',
        currency: 'USD',
        requests: []
    });

    const [newRequestType, setNewRequestType] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddRequest = () => {
        let newRequest: Request = { type: newRequestType as Request['type'], details: {} as RequestDetails };
        switch (newRequestType) {
            case 'Instagram Post':
                newRequest.details = { numberOfPosts: 1 } as InstagramPostDetails;
                break;
            case 'Talk':
                newRequest.details = { mode: 'Online', duration: 60, date: '', location: '' } as TalkDetails;
                break;
            case 'YouTube Video':
                newRequest.details = { duration: 10 } as YouTubeVideoDetails;
                break;
            case 'Blog Post':
                newRequest.details = {} as BlogPostDetails;
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

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="Name" name="name" value={formData.name} onChange={handleInputChange} fullWidth margin="normal" />
            <TextField label="Contact Info" name="contact" value={formData.contact} onChange={handleInputChange} fullWidth margin="normal" />
            <FormControl fullWidth margin="normal">
                <InputLabel>Currency</InputLabel>
                <Select name="currency" value={formData.currency} onChange={handleInputChange as any}>
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="IDR">IDR</MenuItem>
                </Select>
            </FormControl>
            {formData.requests.map((request, index) => (
                <Accordion key={index} defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box flexGrow={1} display="flex" alignItems="center" justifyContent="space-between">
                            <Typography>{request.type}</Typography>
                            <IconButton onClick={() => handleRemoveRequest(index)} size="small" color="error">
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box display="flex" flexDirection="column" alignItems="flex-start">
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
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
            <FormControl fullWidth margin="normal">
                <InputLabel>Add Request</InputLabel>
                <Select value={newRequestType} label="Add Request" onChange={(e) => setNewRequestType(e.target.value as string)}>
                    <MenuItem value="Instagram Post">Instagram Post</MenuItem>
                    <MenuItem value="Talk">Talk</MenuItem>
                    <MenuItem value="YouTube Video">YouTube Video</MenuItem>
                    <MenuItem value="Blog Post">Blog Post</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={handleAddRequest} variant="contained" color="primary" disabled={!newRequestType}>Add Request</Button>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    );
}

export default DynamicForm;
