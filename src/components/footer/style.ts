const styles = ({ app, typography }) => ({
  container: {
    display: 'flex',
    margin: `${typography.pxToRem(8)} auto 0`,
    maxWidth: app.maxWidth,
    width: '100%',
    fontSize: typography.pxToRem(12),
  },
});

export default styles;
