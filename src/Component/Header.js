import React , {useState}from 'react'
import "../styles/Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, } from '@mui/material'
import {Link} from 'react-router-dom'
const Header = () => {

  const [mobile,setMobile] = useState(false)

  const handlerMobile = () => {
    setMobile(!mobile)
  }

  const drawer = (
    <Box onClick={handlerMobile} sx={{textAlign:"center"}}>
      <Typography color={'goldenrod'} variant='h6' sx={{flexGrow:1}}>
        <FastfoodIcon/>
        
         My Restaurant </Typography>
           <Divider/>
     
        <ul className='nav-mobile'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
     
    </Box>
  )
  return (
   <>
   <Box>
    <AppBar sx={{bgcolor:"black"}}>

      <Toolbar>

        <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2, display:{sm : "none"}}} onClick={handlerMobile}>
          <MenuIcon/>
        </IconButton>
      <Typography color={'goldenrod'} variant='h6' sx={{flexGrow:1}}>
        <FastfoodIcon/>
        
         My Restaurant </Typography>

      <Box sx={{display:{ xs : "none", sm : "block"}}}>
        <ul className='nav-ul'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Box>
     
      </Toolbar>
     
    </AppBar>

    <Box component="nav">
       <Drawer variant='temporary' open={mobile} onClose={handlerMobile} sx={{display:{ xs : "block", sm : "none"}}}>
          {drawer}
       </Drawer>
    </Box>
    <Toolbar/>
   </Box>
   </>
  )
}

export default Header