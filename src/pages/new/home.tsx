import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Footer from '../../components/Footer';
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const containerStyle = {
  padding: '0 15vw 0 15vw'
};

export default function ButtonBaseDemo() {
  return (
    <div className='flex flex-col justify-center'>
      <div style={{padding: '10vh 15vw 0 15vw'}}>
        <TypeAnimation
          sequence={[
            "if the neighbor’s grass seems greener, water your lawn",
            1000,
            "pain is a necessary investment for progress",
            1000,
            "get comfortable with being uncomfortable ",
            1000,
            "some people are just stopping by, while others are here to stay",
            1000,
            "i opened up two gifts this morning, they were my eyes",
            1000
          ]}
          speed={50}
          repeat={Infinity}
          style={{ fontSize: '2vh', fontWeight: 'thin', fontFamily: 'Courier'}}
        />
      </div>
      <div style={{padding: '1vh 15vw 5vh 15vw'}}>
        <small style={{textAlign: 'right', color: '#86878a'}}>my favorite quotes, credits go to the original writers</small>
      </div>
      <div style={containerStyle}>
        <Link href="/new/journey">
          <ImageButton
            focusRipple
            key='My Story'
            style={{
              width: '40%',
              height: '30vh'
            }}
          >
            <ImageSrc style={{ backgroundImage: `url('/IMG_0201.jpg')` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                My Story
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Link>
        
        <a href="https://www.joinmasa.ai">
          <ImageButton
            focusRipple
            key='Masa'
            style={{
              width: '30%',
              height: '30vh'
            }}
          >
            <ImageSrc style={{ backgroundImage: `url('/IMG_0206.JPG')` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Masa
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </a>

        <Link href="/new/research">
          <ImageButton
            focusRipple
            key='Research'
            style={{
              width: '30%',
              height: '30vh'
            }}
          >
            <ImageSrc style={{ backgroundImage: `url('/IMG_0207.JPG')` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Research
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Link>
      </div>

      <div style={containerStyle}>
        <Link href="/new/services">
          <ImageButton
            focusRipple
            key='Services'
            style={{
              width: '25%',
              height: '30vh'
            }}
          >
            <ImageSrc style={{ backgroundImage: `url('/IMG_0202.JPG')` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Services
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Link>

        <Link href="/new/products">
          <ImageButton
            focusRipple
            key='Products'
            style={{
              width: '25%',
              height: '30vh'
            }}
          >
            <ImageSrc style={{ backgroundImage: `url('/IMG_0203.jpg')` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Products
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Link>

        <Link href="/new/ratecard">
          <ImageButton
            focusRipple
            key='Rate Card'
            style={{
              width: '25%',
              height: '30vh'
            }}
          >
            <ImageSrc style={{ backgroundImage: `url('/IMG_0205.JPG')` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Rate Card
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Link>

        <Link href="/new/contact">
          <ImageButton
            focusRipple
            key='Contact Me!'
            style={{
              width: '25%',
              height: '30vh'
            }}
          >
            <ImageSrc style={{ backgroundImage: `url('/IMG_0204.jpg')` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Contact Me!
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Link>
      </div>
      
      <Footer></Footer>
    </div>
    
  );
}
