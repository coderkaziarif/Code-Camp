import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeDATA.json';
import HomeComponent from '../HomeComponent/HomeComponent';
import { Container, Grid , Typography} from '@material-ui/core';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Home = () => {
   
   const first6 = fakeData.slice(0, 6);
   const [homeComponents, setHomeComponents] = useState([]);
   
   useEffect(()=>{
      setHomeComponents(first6);
   }, );


   return (
    <> <Header/>
   <Container>
         <Typography variant='h4' color='textPrimary' 
               style={{fontWeight: "500",padding: "10px"}}>
              We are Offering few Courses...
         </Typography> 
      <Grid container>
      {
         homeComponents.map(data => (
            <Grid Item key={data.id} xs={12} sm={6} md={4}>
               <HomeComponent  data = {data} />
            </Grid>
         ))
      }
      </Grid>  
      <Footer/> 
   </Container>
   </>
   );
};

export default Home;