import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { ThemeProvider } from '@mui/material';
// import { createTheme } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({word, adjective, icon, onClick}: {word: string, adjective: string, icon: string, onClick?: () => void}) {
  return (
    <Card sx={{ maxWidth: "20%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {word}
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {adjective}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardMedia component="img" height="100" src={icon}/>
      <CardActions>
        <Button size="small" onClick={onClick}>Learn More</Button>
      </CardActions>
    </Card>
  );
}


{/* <Card>
    <CardHeader
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2016"
    />
    <CardMedia
    component="img"
    height="194"
    image={image1}
    alt="Paella dish"
    />
    <CardContent>
    <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook together with your
        guests. Add 1 cup of frozen peas along with the mussels, if you like.
    </Typography>
    </CardContent>
    <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
    </CardActions>
</Card> */}