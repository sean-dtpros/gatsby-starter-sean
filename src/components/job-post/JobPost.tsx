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
    <Typography variant='h3' color='textPrimary'>
      {data.title}
    </Typography>
    <Typography
      variant='body1'
      dangerouslySetInnerHTML={{
        __html: data.body.childMarkdownRemark.html,
      }}
    />
  </div>
);

export default withStyles(styles)(JobPost);
