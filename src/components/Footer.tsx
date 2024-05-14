import React from 'react'
import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin, FaMedium, FaGithub, FaRegCopyright } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5vh 30vw 2vh 30vw'
};

const footerSyle = {
    padding: '0 0 5vh 0'
}

const Footer = ({}) => {
    return (
        <div style={footerSyle}>
            <div style={containerStyle}>
                <div className="hover:text-indigo-500"><a href="https://www.instagram.com/davynsudirdjo" target="_blank" rel="noreferrer"><FaInstagram size='2vw'/></a></div>
                <div className="hover:text-indigo-500"><a href="https://www.youtube.com/@davyn7" target="_blank" rel="noreferrer"><FaYoutube size='2vw'/></a></div>
                <div className="hover:text-indigo-500"><a href="https://www.tiktok.com/@davynsudirdjo" target="_blank" rel="noreferrer"><FaTiktok size='2vw'/></a></div>
                <div className="hover:text-indigo-500"><a href="https://www.linkedin.com/in/davynsudirdjo" target="_blank" rel="noreferrer"><FaLinkedin size='2vw'/></a></div>
                <div className="hover:text-indigo-500"><a href="https://www.twitter.com/davynsud" target="_blank" rel="noreferrer"><FaXTwitter size='2vw'/></a></div>
                <div className="hover:text-indigo-500"><a href="https://medium.com/@davyn.sudirdjo" target="_blank" rel="noreferrer"><FaMedium size='2vw'/></a></div>
                <div className="hover:text-indigo-500"><a href="https://github.com/davyn7" target="_blank" rel="noreferrer"><FaGithub size='2vw'/></a></div>
                <div className="hover:text-indigo-500"><a href="https://codesandbox.io/u/davyn7" target="_blank" rel="noreferrer"><FiCodesandbox size='2vw'/></a></div>
                
            </div>
            <div className='flex justify-center items-center'>
                <small>Copyright&nbsp;</small> <FaRegCopyright size="1vw"/> <small>&nbsp;2024 Davyn Sudirdjo. All rights reserved.</small>
            </div>
            
        </div>
    );
};

export default Footer;