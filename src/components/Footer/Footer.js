import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { Facebook ,Twitter, Instagram} from '@mui/icons-material';
import React from 'react';


const useStyles = makeStyles((theme)=> ({

   // box1 : {
   //    display: "flex",
   //    justifyContent: "space-around",
      
   //    alignItems:"center"
   // },
}));

const Footer = () => {
   // const classes = useStyles();
   return (
      <Box
         style={{
            backgroundColor: "#651993",
            color: "white",
            padding:{xs:"4px", md:"10px"},
           
            paddingTop:"12px",
            paddingBottom:"12px",
            fontSize:{xs:"12px", md:"14px"},
         }} 
      >
         <Grid container spacing={2} justifyContent="center">
            <Grid item md={6} lg={4}>
                                
                     <Typography variant='caption2' component= 'h2' gutterBottom  color="default">About Us</Typography>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro possimus non qui labore quam dicta.</p>
                  
                  <Box
                      style={{
                        marginTop: "10px",
                        color: "#fff",
                      }}
                  >
                     
                        <Facebook sx={{mr:1}}/>
                        <Twitter sx={{mr:1}}/>
                        <Instagram />
                       
                  </Box>
                  <Typography variant='subtitle2' style={{paddingTop:"35px", color:"#fff"}}>CodeCamp 2022 &copy; All Rights Reserved.</Typography>
               
            </Grid>
         </Grid>
      </Box>
   );
};

export default Footer;