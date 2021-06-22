import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './style';

interface Props {
  classes: any;
};

const Footer = ({ classes }: Props) => (
  <footer className={classes.container}>
    © {new Date().getFullYear()}, 
    {` `}
    <a href='https://www.technosheen.com'> Technosheen</a>
  </footer>
);

export default withStyles(styles)(Footer);
