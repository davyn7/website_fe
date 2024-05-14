import type { NextPage } from "next";
import React from 'react'
import { HeadingComponent } from "../components/HeadingComponent";
import ResponsiveAppBar from "../components/NavBar";
import { Button, Card, Typography, CardHeader, CardMedia, CardContent, CardActions, Grid } from "@mui/material";
import Link from "next/link";
import { loginapi } from "./api/login";
import BasicCard from "../components/MainCard";
import LinkButton from "../components/LinkButton";
import { useRouter } from "next/router";
import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin, FaMedium, FaGithub } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Home: NextPage = () => {

  const submit = () => {
    loginapi("test").then((res) => {
      console.log(res)
    })
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20vh 30vw 2vh 30vw'
  };

  const buttonStyle = {
    padding: '2vh 0 0 0',
  }

  const router = useRouter()

  return (
    <div className='flex flex-col justify-center align-middle'>
      <div style={containerStyle}>
        <div className="hover:text-indigo-500"><a href="https://www.instagram.com/davynsudirdjo" target="_blank" rel="noreferrer"><FaInstagram size='4vw'/></a></div>
        <div className="hover:text-indigo-500"><a href="https://www.youtube.com/@davyn7" target="_blank" rel="noreferrer"><FaYoutube size='4vw'/></a></div>
        <div className="hover:text-indigo-500"><a href="https://www.tiktok.com/@davynsudirdjo" target="_blank" rel="noreferrer"><FaTiktok size='4vw'/></a></div>
        <div className="hover:text-indigo-500"><a href="https://www.linkedin.com/in/davynsudirdjo" target="_blank" rel="noreferrer"><FaLinkedin size='4vw'/></a></div>
        <div className="hover:text-indigo-500"><a href="https://www.twitter.com/davynsud" target="_blank" rel="noreferrer"><FaXTwitter size='4vw'/></a></div>
        <div className="hover:text-indigo-500"><a href="https://medium.com/@davyn.sudirdjo" target="_blank" rel="noreferrer"><FaMedium size='4vw'/></a></div>
        <div className="hover:text-indigo-500"><a href="https://github.com/davyn7" target="_blank" rel="noreferrer"><FaGithub size='4vw'/></a></div>
        <div className="hover:text-indigo-500"><a href="https://codesandbox.io/u/davyn7" target="_blank" rel="noreferrer"><FiCodesandbox size='4vw'/></a></div>
      </div>

      <div style={buttonStyle}><a href="https://www.joinmasa.ai" target="_blank" rel="noreferrer"><LinkButton text="Masa Research"></LinkButton></a></div>
      <div style={buttonStyle}><Link href="/new/home"><LinkButton text="Davyn's Website"></LinkButton></Link></div>
      <div style={buttonStyle}><Link href="/new/ratecard"><LinkButton text="Rate Card"></LinkButton></Link></div>
      <div style={buttonStyle}><Link href="/new/booking"><LinkButton text="Book Consultation"></LinkButton></Link></div>
      <div style={buttonStyle}><a href="mailto:me@davyn.io" target="_blank" rel="noreferrer"><LinkButton text="Get in Touch!"></LinkButton></a></div>
      
    </div>
  );
};

export default Home;
