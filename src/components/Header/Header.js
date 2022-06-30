import React  from 'react';
import { makeStyles, createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import {Box, Typography, Grid, Button, Container} from '@material-ui/core';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';



let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
   hero: {
      backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://img.freepik.com/free-vector/software-developer-programming-desktop-with-code-symbols_24877-70808.jpg?w=2000')",
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "start",
      alignItems: "end",
      color: "#dfdfdf",
      fontSize: "3rem",
   },
   
// backgroundColor : "#C50E39",
 // deepPurple: "#651993",
//  Secondary : "#f50057",
 }));
 


const Header = () => {
   const classes = useStyles();
   // const [value, setValue] = useState();
 
   
   return (

      <Grid>
         <Grid container >
           <Grid item xs={12}>
               {/* <img src={hero} alt="" />    */}
             <Box className={classes.hero}>
               <Container>
               <Box>  
                  <ThemeProvider theme={theme}>
                  <Typography variant="h5">Explore our  modern web development courses.</Typography>                                        
                  </ThemeProvider>
                  <Button variant="contained" color="primary">
                   Explore
                  </Button>
               </Box>
               </Container>
             </Box> 
           </Grid>                   
         </Grid>  
         <Grid container style={{backgroundColor: "#651993", padding : "30px", paddingLeft:"50px" }} >
               <Grid item xs={12} sm={4} style={{marginBottom: "40px"}} >
                  <EmailOutlinedIcon style={{color: "white", paddingBottom: "10px"}}/>
                  <ThemeProvider theme={theme} >                            
                     <Typography variant="h3" style={{color: "white"}}>Get Quote</Typography> 
                     <Typography variant="subtitle2" style={{color: "white", paddingBottom:"15px"}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     </Typography>                           
                  </ThemeProvider>
                  <Button variant="outlined" color="secondary" style={{color: "white"}}>
                     Enrol now
                  </Button>
               </Grid> 

               <Grid item xs={12} sm={4} style={{marginBottom: "40px", paddingLeft:"30px"}}>
                  <HeadsetMicOutlinedIcon style={{color: "white", paddingBottom: "10px"}}/>
                  <ThemeProvider theme={theme}> 
                     <Typography variant="h3" style={{color: "white"}}>Ask a Question</Typography>                            
                     <Typography variant="subtitle2" style={{color: "white", paddingBottom:"15px" }}>
                     Lorem, ipsum dolor sit amet consectetur. Cum, harum!
                     </Typography>           
                  </ThemeProvider>
                  <Button variant="outlined" color="secondary" style={{color: "white"}} >
                     Ask now
                  </Button>
               </Grid>

               <Grid item xs={12} sm={4} style={{marginBottom: "20px", paddingLeft:"25px"}} >
                  <EmailOutlinedIcon style={{color: "white", paddingBottom: "10px"}}/>
                  <ThemeProvider theme={theme}> 
                     <Typography variant="h3" style={{color: "white"}}>Join Today</    Typography>                            
                     <Typography variant="subtitle2" style={{color: "white", paddingBottom:"15px"}} >
                     Lorem ipsum dolor sit amet.
                     </Typography>           
                  </ThemeProvider>
                  <Button variant="outlined" color="secondary" style={{color: "white"}} >
                     join us
                  </Button>
               </Grid>
            </Grid>        
      </Grid>      
   );
};


export default Header;