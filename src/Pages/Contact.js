import React from 'react'
import Layout from '../Component/Layout'
import { Box, Typography } from '@mui/material'
import "../styles/Contact.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <Layout>
   <Box sx={{my:12, ml:5}}>
    <Typography>
       <h1 className='contact-h'>My Contact's Information</h1>
    </Typography>
    <p className='contact-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </Box>
   <div className='contact-div'>Contact Details</div>

   <div className='contact-part'>
   <p>
      <LocalPhoneIcon sx={{pt:1, color:"green"}}/> 1234567890 (toll free)
   </p>
   <p>
       <EmailIcon sx={{pt:1, color:"brown"}}/> anushishukla2001@gmail.com
   </p>
   <p>
       <InstagramIcon sx={{pt:1, color:"red"}}/> My_Restaurant1234
   </p>
   </div>
  </Layout>
  )
}

export default Contact