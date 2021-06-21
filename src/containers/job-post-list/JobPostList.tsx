import React from 'react';
import { withStyles } from '@material-ui/styles';
import { JobPost } from 'components';
import useJobPosts from './useJobPosts';
import styles from './style';
import Box from '@material-ui/core';

interface Props {
  classes: any;
};

const JobPostList = ({ classes }: Props) => {
  const { allContentfulJobPost } = useJobPosts();

  return (
    <div className={classes.container}>
      <Box>
      {allContentfulJobPost.edges.map(({ node }, index) => (
        <JobPost key={index} data={node} />
      ))}
      </Box>
    </div>
  );
};

export default withStyles(styles)(JobPostList);