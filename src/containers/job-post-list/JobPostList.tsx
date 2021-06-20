import React from 'react';
import { withStyles } from '@material-ui/styles';

import { JobPost } from 'components';

import useJobPosts from './useJobPosts';
import styles from './style';

interface Props {
  classes: any;
};

const JobPostList = ({ classes }: Props) => {
  const { allContentfulJobPost } = useJobPosts();

  return (
    <div className={classes.container}>
      {allContentfulJobPost.edges.map(({ node }, index) => (
        <JobPost key={index} data={node} />
      ))}
    </div>
  );
};

export default withStyles(styles)(JobPostList);
