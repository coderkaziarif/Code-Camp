import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Container, Avatar} from '@material-ui/core';

// -----------X---------------
 const useStyles = makeStyles((theme) => ({
    articleContainer: {
      
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(3)
   },
   articleTitle : {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
   },
   media: {
      height: 280
   },
   cardActions:{
      display: "flex",
      margin: "10px",
      justifyContent: "space-between"
   },
   author: {
      display: "flex"
   },
   name: {
      marginLeft: "15px"
   }

 }));


const HomeComponent = (props) => {
   const { course, name, email, price, img, title, avatar,duration} = props.data;
   
   const classes = useStyles();

   return (
      <>
        <Container maxWidth="lg" className={classes.articleContainer}>
         <Grid container spacing={3}>
            {/* <Grid item xs={12} sm={6} md={4}> */}
               <Card style={{width:"400px"}}>
                  <CardActionArea>
                     <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="180"
                        image={img}
                        title="Contemplative Reptile"
                        />
                     <CardContent>
                        
                           <Typography gutterBottom variant="h5" component="h2">
                             {course + " " + price}
                           </Typography>
                           <Typography variant="subtitle1" color="textSecondary" component="p">
                              {title}
                           </Typography>
                        
                     </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                     <Box className = {classes.author}>
                        <Avatar alt="Guy Clemons" src={avatar} />
                        <Box className={classes.name}>
                           <Typography variant='subtitle2' component="p">
                              Course Tutor : {name}
                           </Typography>
                           <Typography variant='subtitle2' color='textSecondary' component="p">
                              {email}
                           </Typography>
                           <Typography variant='subtitle2' color='textSecondary' component="p">
                              Price : {price}.
                           </Typography>
                           <Typography variant='subtitle2' color='textSecondary' component="p">
                              Duration : {duration} months.
                           </Typography>                          
                        </Box>                        
                     </Box>                                 
                     <Button size="small" variant="outlined" color="primary">
                        Learn More
                     </Button>
                  </CardActions>
               </Card>
            </Grid>
         {/* </Grid> */}
      </Container> 

      </>

   );
};

export default HomeComponent;