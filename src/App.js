import React from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './App.css';
import About from "./components/About/About";
import Profiles from "./components/Profiles/Profiles";
import Card from "./components/Card/Card";
import Course from "./components/Course/Course";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Footer from "./components/Footer/Footer";



// <----customize theme---->
const theme = createMuiTheme({
  palette: {
    primary :{
      main: "#651993"
    },    
  },
  typography:{
      fontFamily:"Comic Sans MS",
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none"
      }
    }
  }
})

function App() {
  return (
  <ThemeProvider theme={theme}>
      <BrowserRouter>    
        <Navbar></Navbar>

        <Routes>
            <Route  path="/" element={<Home/>}>                           
            </Route>
            <Route path="home" element={<Home/>}>
            </Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="course" element={<Course/>}></Route>
            <Route path="Profiles" element={<Profiles/>}></Route>
            <Route path="card" element={<Card/>}></Route>
            <Route path="footer" element={<Footer/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>           
        </Routes>                   
    </BrowserRouter>
    </ThemeProvider>


    
    
  );
}

export default App;
