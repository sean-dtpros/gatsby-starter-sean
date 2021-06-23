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
      color: '#00B2FF',
      padding: `${typography.pxToRem(12)} 0`,
    },
    resumeTitlesRight: {
      fontSize: typography.pxToRem(14),
      lineHeight: 1.1,
      fontWeight: 300,
      padding: `${typography.pxToRem(12)} 10`,
      float: 'right',
    },
  });
  
  export default styles;

