const styles = ({ palette, typography }) => ({
  menuContainer: {
    borderRadius: typography.pxToRem(4),
    display: 'inline-block',
  },
  navLink: {
    border: 'none',
    display: 'inline-block',
    padding: `${typography.pxToRem(8)} ${typography.pxToRem(8)}`,
    textDecoration: 'none',
    color: palette.text.secondary,
    fontWeight: 400,
  },
  navLinkActive: {
    borderBottom: `${typography.pxToRem(2)} solid ${palette.primary.main}`,
  },
});

export default styles;
