const styles = ({ typography }) => ({
    container: {
      padding: `${typography.pxToRem(16)} 0`,
    },
    summary: {
      fontSize: typography.pxToRem(16),
      lineHeight: 1.1,
      fontWeight: 300,    
    },
    position: {
      fontSize: typography.pxToRem(18),
      lineHeight: 1.25,
      fontWeight: 500,
      color: '#60BAE1',
      padding: `${typography.pxToRem(12)} 0 ${typography.pxToRem(12)} 0`,
    
    },
  });
  
  export default styles;

