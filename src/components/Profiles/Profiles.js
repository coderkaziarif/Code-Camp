import React from 'react';
import { Container, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Box,   } from '@material-ui/core';
import profile from '../../img/profile1.jpg';
import { Facebook ,Twitter, Instagram} from '@mui/icons-material';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const heading = "Teachers Profiles";
const text = "The quick brown fox jumps over the lazy dog. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. The quick brown fox jumps over the lazy dog. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ";

// border: "1px solid #0781D7"
const Profiles = () => {

const name = "Maria Gomez";
const sub = "Programer";
   return (
      <Container>
         <Box style={{backgroundColor:"#35363A", padding: "20px 50px"}}>
            <MuiThemeProvider theme={theme} >
               <Typography variant='h3'  component= 'h2' gutterBottom style={{ marginTop:"10vh", color:"#FCAC49"}}>
                  {heading}
               </Typography>
               <Typography variant='body1'  style={{padding: '10px 20px', textAlign: "justify" ,color:"#fff"}}>
                  {text}
               </Typography>
            </MuiThemeProvider>
         </Box>
         <Box style={{backgroundColor:"#E04A39"}}>  
               <Container style={{padding: " 50px"}}>
               
                  <Grid  style={{backgroundColor:"#fff" , padding: " 20px"}} >
                     <Grid item xs={12} style={{paddingLeft: "18px"}}>
                        <Typography variant='h6' color="textPrimary">
                           {name}
                        </Typography>
                        <Typography variant='subtitle2' color="textPrimary">
                           {sub}
                        </Typography> 
                     </Grid>
                     
                     <Grid spacing={2} style={{display:"flex", }}> 
                        {/* Box style={{width:"70%"}} , width :"25%"*/}
                        <Grid item xs={12} md={8} >                   
                           <img src={profile}  style={{width:"100%",padding: '10px 20px'}}></img>
                           <Typography variant='subtitle1' color="textPrimary"   gutterBottom 
                                 style={ {padding: '10px 15px', textAlign: "justify"}}>
                                 {text}
                           </Typography>
                        </Grid> 
                        <Grid item xs={12} md={3} style={{marginLeft:"50px", marginTop:"7px", height:"400px",  border: "1px solid #dfdfdf",paddingLeft:"40px"}}>
                           <h5>Profile info</h5>
                           <p>Appointment: Programer</p>
                           <p>Experiences: 5years</p>
                           <p>Phone: +58 02765 251</p>
                           <p>Email: dumyKay@gml.com</p>
                           <performance>Socials Media</performance>
                           <Box
                      style={{
                        marginTop: "10px",
                        color: "#ddd",
                      }}
                  >
                     
                        <Facebook sx={{mr:1}}/>
                        <Twitter sx={{mr:1}}/>
                        <Instagram />
                       
                  </Box>
                        </Grid>                       
                     </Grid>
      
                  </Grid>
           
               </Container>
            </Box>                            
      </Container>
   );
};

export default Profiles;