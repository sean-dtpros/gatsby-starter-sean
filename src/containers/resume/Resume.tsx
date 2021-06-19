import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { Animated, } from 'components';

import content from './content';

const { title, summary, jobDate1, jobTitle1, jobCompany1, jobLocation1, } = content;
const Resume = () => (
    <>
      <Fade in timeout={1000}>
        <Typography variant='h1' color='textPrimary'>
          <Animated>{title}</Animated>
        </Typography>
      </Fade>
      <Typography variant='h3' color='textPrimary'>
        {summary}
      </Typography>
      <Box component="span" m={1} paddingY={2}>
      <Grid container spacing={3}>
      <Grid item xs={6}>
      <Typography variant='p' color='textPrimary'>
          {jobTitle1}
          </Typography>
        <Typography variant='p' color='textPrimary'>
          {jobCompany1}
          </Typography>
      </Grid> 
      <Grid item xs={6}>    
        <Typography variant='body1' color='textPrimary'>
          {jobDate1}
          </Typography>
        <Typography variant='body1' color='textPrimary'>
          {jobLocation1}
        </Typography>
      </Grid>
    </Grid>
    </Box>
    </>
  );
  
  export default Resume;