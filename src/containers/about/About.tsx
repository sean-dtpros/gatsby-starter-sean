import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import styles from './style';

import { Animated, LinkList } from 'components';

import content from './content';

const { title, subtitle, links, summary, } = content;


const About = () => (
  <>
    <div className={classes.container}>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary' paddingTop='32'>
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
    </div>
  </>
);

export default withStyles(styles)(About);