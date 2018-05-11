const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '20px',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  navBarColor: {
     backgroundColor: "#006064",
  },
  NavBarToolbar:{
    background: "#006064"
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      height: '100px'
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,


  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',


    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },

  button: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: "#006064",
    margin:'5px'
  },
  row: {
    display: 'flex',
  },
   link: {
    color: "#FFFFFF",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
});
export default styles
