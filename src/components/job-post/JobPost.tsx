import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import styles from './style';

interface Props {
  classes: any;
  data: any;
};

const JobPost = ({ classes, data }: Props) => (
  <div className={classes.container}>
    <Typography variant='body2' color='textPrimary'>
      {data.position}
    </Typography>
    <Typography variant='body2' color='textPrimary'>
      {data.company}
    </Typography>
    <Typography variant='body1' color='textPrimary'>
      {data.startDate}
    </Typography>
    <Typography variant='body1' color='textPrimary'>
      {data.endDate}
    </Typography>
    <Typography variant='body1' color='textPrimary'>
      {data.location}
    </Typography>
    <div className={classes.location}>{data.location}</div>
    <div className={classes.summary}
        dangerouslySetInnerHTML={{
          __html: data.summary.childMarkdownRemark.html,
        }}
      ></div>
  </div>
);

export default withStyles(styles)(JobPost);
