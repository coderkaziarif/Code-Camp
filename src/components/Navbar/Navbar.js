import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Grid, IconButton, Menu, MenuItem, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css';


/* <===Style===> */
const useStyles = makeStyles((theme) => ({
   root: {
     flexGrow: 1,
   },
   title: {
     flexGrow: 1,  
     color:"#fff" 
   //   color:"#00e8ff"   
   },
      // toolbar: theme.mixins.toolbar,  

 }));


 
const Navbar = () => {    
   const classes = useStyles();
  

   // <----Tabs ----->
   // const [value, setValue] = React.useState(0);

   // const history = useHistory();

   // let navigate = useNavigate();  
   // function handleNavigate(item) {
   //    const url = `/${item.path}`
   //    navigate(url)
   //  }
 
   //  <----Tabs End----->

    /* <===State for Dropdown menu===> */
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
    };
    /* <===End===> */

  

   // <-----menu item------->
    const menuItems = [
      {id : 1, name: "Java Script"},
      {id : 2, name: "Python"},
      {id : 3, name: "Ruby"},
      {id : 4, name: "PHP"},
      {id : 5, name: "Java"},
      {id : 6, name: "Html & CSS"},
   ]
    
   return (

   <>
    <AppBar color='primary' >
       <Toolbar >
          <Grid  container>
             <Grid item xs={12} sm={6}>
                  <Typography variant="h4" className={classes.title}>
                       CodeCamp
                   </Typography>
             </Grid>
             <Grid item xs={12} sm={6}>
                             
                      {/* <===Router link===> */}
                     <div className='link_item'>
                        <Link className='link' to={'/home'}>Home</Link>
                        <Link  className='link' to={'/about'}>About</Link>
                        {/* <===Dropdown item===> */}
                        <Link 
                           aria-controls="simple-menu" 
                           aria-haspopup="true" 
                           onClick={handleClick}
                           className='link ' to={'/course'}>Course
                        </Link> 

                        {/* <===Dropdown menus===> */}
                           <Menu
                                 id="simple-menu"
                                 anchorEl={anchorEl}
                                 keepMounted
                                 open={Boolean(anchorEl)}
                                 onClose={handleClose}
                                 className={classes.paper}
                                 >
                                    { menuItems.map(item => (
                                       <MenuItem onClick={handleClose} key ={item.id}>
                                          <ListItemText primary = {item.name}/>
                                       </MenuItem>
                                       ))
                                    }
                           </Menu>
                           {/* <===End===> */}

                        <Link className='link ' to={'/profiles'}>Teachers Profiles</Link>  
                         {/* <IconButton 
                           className={classes.menuButton}  
                           color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton> */}
                        {/* <-------Old Menu item end--------------< */}

                     </div>
             </Grid>
          </Grid>
       </Toolbar>
    </AppBar>

    <div className={classes.toolbar}>
      
    </div>
    </>
   );
};

export default Navbar;