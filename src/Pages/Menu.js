import React from 'react'
import {MenuList} from '../data/data'
import Layout from '../Component/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
   <Box sx={{justifyContent:"center", display:"flex", flexWrap:"wrap"}}>
    {
      MenuList.map(menu => (
        <Card sx={{maxWidth:"390px", mt:5, p:1}}>
          <CardActionArea>
              <CardMedia sx={{minHeight:'400px'}} component = {'img'} src={menu.image} alt={menu.name}/>
              <CardContent>
                <Typography variant='h5' component={"div"}>
                    {menu.name}
                </Typography>
                <Typography variant='body2'> {menu.discription}</Typography>
              </CardContent>
          </CardActionArea>
        </Card>
      ))
    }
   </Box>
  </Layout>
  )
}

export default Menu