const styles = ({ typography }) => ({
    container: {
      padding: `${typography.pxToRem(16)} 0`,
    },
    summary: {
      fontSize: typography.pxToRem(16),
      lineHeight: 1.1,
      fontWeight: 300,    
    },
    location: {
      fontSize: typography.pxToRem(16),
      lineHeight: 1.1,
      fontWeight: 300,
      align: right,    
    },
  });
  
  export default styles;

