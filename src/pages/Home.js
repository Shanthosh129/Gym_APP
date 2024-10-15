import React, {useState} from 'react' ;
import { Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercise from '../components/SearchExercise';

const Home = () => {
  return (
 <Box>
      <HeroBanner/>
      <SearchExercise/>
      <Exercises/>
      
      </Box>
  )
}

export default Home
