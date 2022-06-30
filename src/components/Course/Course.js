import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import fakeData from "../../fakeData/fakeDATA.json";
import CourseComp from '../CourseComp/CourseComp';

const Course = () => {
   const [courses, setCourses] = useState([]);

   useEffect(()=>{
      setCourses(fakeData);
   }, []);
   return (
      <Container>
          <Typography variant='h4' color='textPrimary' 
               style={{fontWeight: "500",padding: "10px", marginTop: "10vh"}}>
               Our Courses...
         </Typography> 
        <Grid container>
            {
               courses.map(course => (
                  <Grid item key={course.id} xs={12} sm={6} lg ={4}>
                     <CourseComp course={course} />
                  </Grid>
               ))
            }
        </Grid>
      </Container>
   );
};

export default Course;