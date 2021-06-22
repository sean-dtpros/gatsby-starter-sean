import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import styles from './style';

interface Props {
  classes: any;
  data: any;
};

const JobPost = ({ classes, data }: Props) => (
  <div className={classes.container}>
      <Box component="span" m={1} paddingTop={5}>
      <Grid container spacing={3}>
      <Grid item xs={6}>
      <Typography variant='body2' color='textPrimary'>
          {data.position}
          </Typography>
        <Typography variant='body2' color='textPrimary'>
          {data.company}
          </Typography>
      </Grid> 
      <Grid item xs={6}>    
        <Typography variant='body2' color='textPrimary'>
          {data.startDate} - {data.endDate}
          </Typography>
        <Typography variant='body2' color='textPrimary'>
          {data.location}
        </Typography>
      </Grid>
    </Grid>
    </Box>
        <div className={classes.summary}
        dangerouslySetInnerHTML={{
          __html: data.summary.childMarkdownRemark.html,
        }}
      ></div>
  </div>
);

export default withStyles(styles)(JobPost);
