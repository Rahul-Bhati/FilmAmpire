import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      flexWrap: 'wrap',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

// import { makeStyles } from '@mui/styles';

// const drawerWidth = 240;

// export default makeStyles((theme) => ({
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     height: '80px',
//     marginLeft: '240px',
//     [theme.breakpoints.down('sm')]: {
//       marginLeft: '0px',
//       flexWrap: 'wrap',
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   drawer: {
//     [theme.breakpoints.up('sm')]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   linkButton: {
//     '&:hover': {
//       textDecoration: 'none',
//       color: 'white !important',
//     },
//   },
// }));