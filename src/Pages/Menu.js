import React, {useState,useEffect} from 'react'
import {MenuList} from '../data/data'
import Layout from '../Component/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {


  const [meal, setMeal] = useState(null);

  useEffect(() => {
  
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      .then(response => response.json())
      .then(data => {
     // console.log(data);
        if(data.meals && data.meals.length > 0) {
          setMeal(data.meals[0]);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 


  if (!meal) {
    return <div>Loading...</div>;
  }


  
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