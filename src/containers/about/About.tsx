import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';


import { Animated, LinkList } from 'components';

import content from './content';

const { title, subtitle, links, summary } = content;

const About = () => (
  <>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{title}</Animated>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle}
    </Typography>
    <LinkList links={links} />
    <Typography variant='p' color='textPrimary'>
      {summary}
    </Typography>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant='p' color='textPrimary'>
                {summary}
            </Typography>
        </Grid>
    <Grid item xs={6}>    
      <Typography variant='h5' color='textPrimary'>
        {jobTitle1}
        </Typography>
    </Grid>
    <Grid item xs={6}>
      <Typography variant='h5' color='textPrimary'>
        {jobLocation1}
        </Typography>
    </Grid>  
  </Grid>
  </>
);

export default About;
