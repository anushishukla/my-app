import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Typography } from '@mui/material'


const Footer = () => {
  return (
    <>
    <Box>  
       
        <Typography variant="h6" sx={{bgcolor:"#1A1A19", color:"white", textAlign:"center", p:1}}>
            <Box sx={{"& svg:hover":{color:"goldenrod", transition:"1.5s"},"& svg": {fontSize:"35px",p:1}}}>
            <InstagramIcon/>
            <FacebookIcon/>
            <GitHubIcon/>
            <TwitterIcon/>
            </Box>
       
            All Rights Reserved &copy: techinfo YT
        </Typography>
    </Box>
    </>
  )
}

export default Footer