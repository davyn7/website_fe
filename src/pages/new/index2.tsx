import type { NextPage } from "next";
import React from 'react'
import { HeadingComponent } from "../../components/HeadingComponent";
import ResponsiveAppBar from "../../components/NavBar";
import { Button, Card, Typography } from "@mui/material";
import Grid from "@mui/material";
import Link from "next/link";
import { loginapi } from "../api/login";


// import image1 from "../public/davyngrad1.jpg"
import BasicCard from "../../components/MainCard";
import { useRouter } from "next/router";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Home: NextPage = () => {

  const submit = () => {
    loginapi("test").then((res) => {
      console.log(res)
    })
  }

  const router = useRouter()

  return (
    <div className='flex flex-col justify-center'>
      <ResponsiveAppBar></ResponsiveAppBar>
      
      <div className='flex flex-wrap gap-10 justify-center items-center mt-10'>
        <BasicCard word="test" adjective="test" icon={"/davyngrad1.jpg"} onClick={() => router.push("/new/journey")}/>
        <BasicCard word="test" adjective="test" icon={"/davyngrad1.jpg"} onClick={() => router.push("/new/journey")}/>
        <BasicCard word="test" adjective="test" icon={"/davyngrad1.jpg"} onClick={() => router.push("/new/journey")}/>
        <BasicCard word="test" adjective="test" icon={"/davyngrad1.jpg"} onClick={() => router.push("/new/journey")}/>
        <BasicCard word="test" adjective="test" icon={"/davyngrad1.jpg"} onClick={() => router.push("/new/journey")}/>
      </div>
      
      <div className='flex flex-wrap gap-10 justify-center items-center mt-10'>
        <Link href="/new/journey">
          <Card sx={{ minWidth: 275 }} className="hover:w-['80%']">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Journey
            </Typography>
          </Card>
        </Link>
        <Card sx={{ minWidth: 275 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Portfolio
          </Typography>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Content
          </Typography>
        </Card>
      </div>
      <div className='flex flex-wrap gap-10 justify-center mt-10'>
        <Card sx={{ minWidth: 275 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Journey
          </Typography>
        </Card>
        <Card sx={{ minWidth: 275 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Portfolio
          </Typography>
        </Card>
      </div>
      <Button onClick={submit}>Submit</Button>
      <HeadingComponent>HAII</HeadingComponent>
    </div>
  );
};

export default Home;
