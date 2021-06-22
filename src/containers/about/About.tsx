import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { Animated, LinkList } from 'components';

import content from './content';

const { title, subtitle, links, jobDate1, jobTitle1, jobCompany1, jobLocation1, summary, } = content;


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
    <Typography variant='body1' color='textPrimary'>
      {summary}
    </Typography>
  </>
);

export default About;
